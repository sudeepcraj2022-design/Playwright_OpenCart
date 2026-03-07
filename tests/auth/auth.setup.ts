import {test as setup, expect, Page} from "@playwright/test";
import {LoginPage} from "../../pages/login-page";
import loginData from "../../test-data/login-data.json";

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // 1. Use your existing POM methods
    await loginPage.navigateTo('index.php?route=account/login');
    await loginPage.login(loginData[0].email, loginData[0].password);

    // 2. Verify login was successful before saving state
    await expect(loginPage.accountInfoBtn).toBeVisible();

    // 3. Save the session
    await page.context().storageState({ path: authFile });
});