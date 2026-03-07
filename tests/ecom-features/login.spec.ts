import {test, expect, Page} from "@playwright/test";
import {LoginPage} from "../../pages/login-page";
import {HomePage} from "../../pages/home-page";
import loginData from '../../test-data/login-data.json';


test('Login with valid credentials', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('index.php?route=account/login');

    await loginPage.login(loginData[0].email, loginData[0].password);

    await expect(loginPage.accountInfoBtn).toBeVisible();

});

