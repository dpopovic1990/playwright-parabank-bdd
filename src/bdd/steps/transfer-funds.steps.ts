import { When, Then } from '@cucumber/cucumber';
import { TransferFundsPage } from '../../pages/transfer-funds.page';
import { AccountsOverviewPage } from '../../pages/accounts-overview.page';
import { AccountDetailsPage } from '../../pages/account-details.page';

let transferPage: TransferFundsPage;
let accountsPage: AccountsOverviewPage;
let detailsPage: AccountDetailsPage;

When('I transfer 100 dollars from the first to the second account', async function() {
    const world = this as any;
    transferPage = new TransferFundsPage(world.page);
    accountsPage = new AccountsOverviewPage(world.page);
    detailsPage = new AccountDetailsPage(world.page);

    await accountsPage.assertOnAccountsOverviewPage();

    await transferPage.navigateTo();
    await transferPage.transfer('100', 0, 0);
});

Then('I should see a successful transfer message', async function() {
    await transferPage.assertTransferSuccess();
});