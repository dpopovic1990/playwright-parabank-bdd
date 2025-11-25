import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    headless: true,
    baseURL: 'https://parabank.parasoft.com/parabank',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'html-report', open: 'never' }]],
});