import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { AccountsOverviewPage } from '../../pages/accounts-overview.page';

const VALID_USER = 'john';
const VALID_PASS = 'demo';

let loginPage: LoginPage;
let accountsPage: AccountsOverviewPage;
let page: any;


Given('I am on the login page', async function () {
    //page = this.page;
    const world = this as any;
    loginPage = new LoginPage(world.page);
    accountsPage = new AccountsOverviewPage(world.page);

    await loginPage.open();
});

When('I login with valid credentials', async function () {
    await loginPage.login(VALID_USER, VALID_PASS);
});

Then('I should see the Accounts Overview page', async function () {
    console.log('>>> Current URL:', await this.page.url());
    await accountsPage.assertOnAccountsOverviewPage();
});