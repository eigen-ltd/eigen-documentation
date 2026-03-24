import fs from 'fs';
import path from 'path';

// Folder names to skip at the top level
const IGNORED_TOP_LEVEL_DIRS = ['no'];

function isMarkdownFile(name) {
  return /\.mdx?$/.test(name);
}

function isIndexFile(name) {
  return /^folder\.mdx?$/.test(name);
}

function normalizePath(p) {
  return p.replace(/\\/g, '/');
}

function stripExtension(name) {
  return name.replace(/\.mdx?$/, '');
}

function slugifySegment(value) {
  return value.trim().toLowerCase().replace(/\s+/g, '-');
}

function slugifyPath(relPath) {
  return normalizePath(relPath).split('/').filter(Boolean).map(slugifySegment).join('/');
}

function parseFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const yaml = match[1];

  const titleMatch = yaml.match(/^title:\s*(.+)$/m);

  const badgeMatch = yaml.match(/badge:\s*\n\s*text:\s*(.+)\n\s*variant:\s*(.+)/);

  const result = {};

  if (titleMatch) {
    result.title = titleMatch[1].trim().replace(/^['"]|['"]$/g, '');
  }

  if (badgeMatch) {
    result.badge = {
      text: badgeMatch[1].trim().replace(/['"]/g, ''),
      variant: badgeMatch[2].trim().replace(/['"]/g, ''),
    };
  }

  return result;
}

function getLabelFromFile(filePath, fallbackName) {
  const { title } = parseFrontmatter(filePath);
  return title || fallbackName;
}

function subtreeHasIndex(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile() && isIndexFile(entry.name)) {
      return true;
    }

    if (entry.isDirectory() && subtreeHasIndex(fullPath)) {
      return true;
    }
  }

  return false;
}

function generateSidebar(dir, base = '', depth = 0) {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));

  return entries
    .map(entry => {
      const name = entry.name;
      const fullPath = path.join(dir, name);
      const relPath = normalizePath(path.join(base, name));

      // At top level: skip loose files and ignored folder names
      if (depth === 0) {
        if (entry.isFile()) return null;
        if (entry.isDirectory() && IGNORED_TOP_LEVEL_DIRS.includes(name)) {
          return null;
        }
      }

      if (entry.isDirectory()) {
        const directChildren = fs.readdirSync(fullPath);
        const hasOwnIndex = directChildren.some(isIndexFile);
        const hasAnyIndexBelow = subtreeHasIndex(fullPath);

        const item = {
          label: name,
        };

        // Use folder.mdx title as folder label if present
        if (hasOwnIndex) {
          const indexFile = directChildren.find(isIndexFile);
          const indexPath = path.join(fullPath, indexFile);
          const { title, badge } = parseFrontmatter(indexPath);

          if (title) {
            item.label = title;
          }

          if (badge) {
            item.badge = badge;
          }
        }

        // Collapse whole subtree to autogenerate at highest eligible level
        if (!hasAnyIndexBelow) {
          item.autogenerate = { directory: relPath };
          return item;
        }

        const children = generateSidebar(fullPath, relPath, depth + 1).filter(
          child => child && !child._isIndex
        );

        if (children.length) {
          item.items = children;
        }

        return item;
      }

      if (entry.isFile() && isMarkdownFile(name)) {
        const isIndex = isIndexFile(name);
        const fileBaseName = stripExtension(name);

        const item = {
          label: getLabelFromFile(fullPath, fileBaseName),
          link: `/${slugifyPath(path.join(base, fileBaseName))}`,
        };

        const { badge } = parseFrontmatter(fullPath);
        if (badge) {
          item.badge = badge;
        }

        if (isIndex) {
          item._isIndex = true;
        }

        return item;
      }

      return null;
    })
    .filter(Boolean);
}

// Generate from root
const rootDir = './src/content/docs';
const output = generateSidebar(rootDir);

const outputPath = path.join(process.cwd(), 'generated-sidebar.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log(`Sidebar written to: ${outputPath}`);
