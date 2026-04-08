import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import dotenv from 'dotenv';
import AutoImport from 'astro-auto-import';
import astroExpressiveCode from 'astro-expressive-code';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

dotenv.config();

const site = process.env.SITE_URL || 'http://localhost:4321/';

export const locales = {
  root: { label: 'English', lang: 'en' },
  // no: { label: 'Norsk', lang: 'no' },
  // pl: { label: 'Polski', lang: 'pl' },
  // es: { label: 'Español', lang: 'es' },
  // az: { label: 'Azərbaycanca', lang: 'az' },
};

// https://astro.build/config
export default defineConfig({
  site,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      expressiveCode: {
        themes: ['dracula', 'min-light'],
        removeUnusedThemes: true,
        useStarlightUiThemeColors: true,
      },
      title: 'Eigen Documentation',
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/eigen-ltd/eigen-documentation/edit/main/docs/',
      },
      locales,
      routeMiddleware: './src/routeData.ts',
      logo: {
        dark: './src/assets/eigen-dark.svg',
        light: './src/assets/eigen-light.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: {
            directory: 'getting-started',
            collapsed:true,
          },
        },

        {
          label: 'Ingenuity Modules',
          autogenerate: {
            directory: 'modules',
            collapsed: true,
          },
        },
        {
          label: 'Developing with Eigen',
          collapsed: true,
          items: [
            {
              label: 'Excel Addin',
              collapsed: true,
              autogenerate: {
                directory: 'developing-with-eigen/excel-addin',
              },
            },
            {
              label: 'Python Library',
              collapsed: true,
              items: [
                {
                  label: 'Intro to the Python SDK',
                  link: '/developing-with-eigen/python-library/overview',
                },
                {
                  label: 'Authentication',
                  link: '/developing-with-eigen/python-library/authentication',
                },
                {
                  label: 'Historian Multi',
                  autogenerate: {
                    directory: 'developing-with-eigen/python-library/Historian Multi',
                  },
                },
                {
                  label: 'Asset Model',
                  autogenerate: {
                    directory: 'developing-with-eigen/python-library/Asset Model',
                  },
                },

                {
                  label: 'Common Menu',
                  autogenerate: {
                    directory: 'developing-with-eigen/python-library/Common Menu',
                  },
                },
                {
                  label: 'Eventlog',
                  autogenerate: {
                    directory: 'developing-with-eigen/python-library/Eventlog',
                  },
                },
                {
                  label: 'SQL',
                  autogenerate: {
                    directory: 'developing-with-eigen/python-library/SQL',
                  },
                },
                {
                  label: 'Historian',
                  badge: {
                    text: 'Deprecated',
                    variant: 'danger',
                  },
                  items: [
                    {
                      label: 'The Legacy Historian Module',
                      link: '/developing-with-eigen/python-library/historian/overview',
                    },
                  ],
                },
                {
                  label: 'Elastic',
                  badge: {
                    text: 'Deprecated',
                    variant: 'danger',
                  },
                  items: [
                    {
                      label: 'The Legacy Elastic Module',
                      link: '/developing-with-eigen/python-library/elastic/overview',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Office 365 Connector',
              collapsed: true,
              badge: {
                text: 'TBA',
                variant: 'caution',
              },
              autogenerate: {
                directory: 'developing-with-eigen/office-connector',
              },
            },
          ],
        },
        // { // An example comparison of Markdown vs LaTeX. Commented to not deploy to site.
        //   label: 'LaTeX Testing',
        //   autogenerate: {
        //     directory: 'testing',
        //   },
        // },
      ],
      plugins: [starlightThemeNova()],
    }),

    AutoImport({
      imports: [
        {
          '@astrojs/starlight/components': [
            'Aside',
            'Badge',
            'CardGrid',
            'Card',
            'FileTree',
            'Icon',
            'Steps',
            'Tabs',
            'TabItem',
            // 'Code',
          ],
          'starlight-theme-nova/components': [
            'Code',
            'CodeFile',
            'LinkButton',
            'LinkCard',
            'CodeTabItem',
            'CodeTabs',
          ],
        },
      ],
    }),
  ],
});
