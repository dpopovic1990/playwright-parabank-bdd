import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AccountDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertOnAccountDetailsPage() {

    await expect(
      this.page.getByRole('heading', { name: /Account Details/i })
    ).toBeVisible();

  }
}