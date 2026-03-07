import { test, expect } from '@playwright/test';
import {LoginPage} from "../../pages/login-page";

test('should access account page directly', async ({ page }) => {
    const loginPage = new LoginPage(page);

    //const cookies = await page.context().cookies();
    //console.log('Cookies loaded:', cookies);

    // Navigate directly to the account page (bypassing login)
    await loginPage.navigateTo('index.php?route=account/account');

    // If the global setup worked, this element will be visible immediately
    // Replace 'My Account' with the actual text or selector on your page
    await expect(loginPage.accountInfoBtn).toBeVisible();

});