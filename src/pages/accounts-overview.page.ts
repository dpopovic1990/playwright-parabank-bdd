import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AccountsOverviewPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.goto('/');
  }

  async assertOnAccountsOverviewPage() {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForURL(/overview/);

    await expect(this.page.getByRole('heading', { name: /Accounts Overview/i })).toBeVisible();
    await expect(this.page.locator('#accountTable')).toBeVisible();
  }

  async getOnAccountsCount(): Promise<number> {
    const allRows = this.page.locator('#accountTable tr');
    const dataRows = allRows.filter({ has: this.page.locator('td') });
    return await dataRows.count();
  }

  async openAccountDetailsByIndex(index: number) {
    const allRows = this.page.locator('#accountTable tr');
    const dataRows = allRows.filter({ has: this.page.locator('td') });

    const count = await dataRows.count();
    if (index >= count) {
      throw new Error(`Index ${index} out of range. Found only ${count} account rows.`);
    }

    const row = dataRows.nth(index);
    await row.locator('a').first().click();
  }
}