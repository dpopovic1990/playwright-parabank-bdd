import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { AccountsOverviewPage } from '../../pages/accounts-overview.page'

const VALID_USER = 'john';
const VALID_PASS = 'demo';

test.describe('Accounts Overview', () => {
    test('user sees at least one account after login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const accountsPage = new AccountsOverviewPage(page);

        await loginPage.open();
        await loginPage.login(VALID_USER, VALID_PASS);

        await accountsPage.assertOnAccountsOverviewPage();

        const count = await accountsPage.getOnAccountsCount();

        await expect(count).toBeGreaterThan(0);
    });
});