import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'html-report', open: 'never' }]],

  use: {
    headless: true,
    baseURL: 'https://parabank.parasoft.com/parabank',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'ui',
      testDir: './src/tests/ui',
    },
    {
      name: 'api',
      testDir: './src/api/tests',
    }
  ],
});