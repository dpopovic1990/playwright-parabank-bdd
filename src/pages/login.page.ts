import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

const BASE_URL = 'https://parabank.parasoft.com/parabank';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.goto(BASE_URL);
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Log In'}).click();
  }

  async assertLoginFormVisible() {
    await expect(this.page.getByRole('heading', { name: 'Customer Login'})).toBeVisible();
  }

  async assertErrorContains(text: string) {
    const error = this.page.locator('#rightPanel .title');
    await expect(error).toContainText(text);
    
  }
}