import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import dotenv from 'dotenv';

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
  integrations: [
    starlight({
      expressiveCode: {
        themes: ['aurora-x', 'github-light'],
        removeUnusedThemes: true,
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
          label: 'Documentation',
          translations: {
            no: 'Dokumentasjon',
            pl: 'Dokumentacja',
            es: 'Documentación',
            az: 'Dokumentasiya',
          },
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
          translations: {
            no: 'Komponenter',
            pl: 'Komponenty',
            es: 'Componentes',
            az: 'Komponentlər',
          },
        },
      ],
      plugins: [starlightThemeNova()],
    }),
  ],
});
