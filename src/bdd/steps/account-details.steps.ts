import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/login.page";
import { AccountsOverviewPage } from "../../pages/accounts-overview.page";
import { AccountDetailsPage } from "../../pages/account-details.page";

const VALID_USER = 'john';
const VALID_PASS = 'demo';

let loginPage: LoginPage;
let accountsPage: AccountsOverviewPage;
let detailsPage: AccountDetailsPage;

Given('I am logged in', async function() {
    const world = this as any;
    loginPage = new LoginPage(world.page);
    accountsPage = new AccountsOverviewPage(world.page);
    detailsPage = new AccountDetailsPage(world.page);

    await loginPage.open();
    await loginPage.login(VALID_USER, VALID_PASS);
    await accountsPage.assertOnAccountsOverviewPage();
});

When('I open the first account', async function() {
    await accountsPage.openAccountDetailsByIndex(0);
});

Then('I should see the account details page', async function() {
    await detailsPage.assertOnAccountDetailsPage();
});