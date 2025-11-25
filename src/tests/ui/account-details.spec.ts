import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { AccountsOverviewPage } from '../../pages/accounts-overview.page';
import { AccountDetailsPage } from '../../pages/account-details.page';

const VALID_USER = 'john';
const VALID_PASS = 'demo';

test.describe('Account Details', () => {
  test('user can open details of the first account', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const accountsPage = new AccountsOverviewPage(page);
    const accountDetailsPage = new AccountDetailsPage(page);

    await loginPage.open();
    await loginPage.login(VALID_USER, VALID_PASS);

    await accountsPage.assertOnAccountsOverviewPage();

    const count = await accountsPage.getOnAccountsCount();
    if (count === 0) {
      throw new Error('No accounts available to open details for.');
    }

    await accountsPage.openAccountDetailsByIndex(0);

    await accountDetailsPage.assertOnAccountDetailsPage();
  });
});