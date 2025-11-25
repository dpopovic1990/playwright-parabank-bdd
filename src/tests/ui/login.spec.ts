import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

const VALID_USER = 'john';
const VALID_PASS = 'demo';

test.describe('ParaBank login', () => {
    test('successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(VALID_USER, VALID_PASS);

        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    });

    test('login fails with invalid password (skiped because demo app allows login with any credentials)', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(VALID_USER, 'wrongpass');

        await loginPage.assertErrorContains('Error!');
    });
})