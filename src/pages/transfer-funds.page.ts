import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class TransferFundsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateTo() {
        await this.page.getByRole('link', { name: 'Transfer Funds' }).click();
        await this.page.waitForURL(/transfer/);

        await this.page.locator('#amount').waitFor({ state: 'visible' });
    }

    async transfer(amount: string, fromIndex: number, toIndex: number) {
        await this.page.locator('#amount').fill(amount);

        const fromSelect = this.page.locator('#fromAccountId');
        const toSelect = this.page.locator('#toAccountId');

        const fromOptionsCount = await fromSelect.locator('option').count();
        const toOptionsCount = await toSelect.locator('option').count();

        const safeFromIndex = Math.min(fromIndex, fromOptionsCount - 1);
        const safeToIndex = Math.min(toIndex, toOptionsCount - 1);

        await fromSelect.selectOption({ index: safeFromIndex });
        await toSelect.selectOption({ index: safeToIndex });

        await this.page.getByRole('button', { name: /Transfer/i }).click();
    }

    async assertTransferSuccess() {
        await expect(this.page.getByRole('heading', { name: /Transfer Complete/i })).toBeVisible();
    }
}

