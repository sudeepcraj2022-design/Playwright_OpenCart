import {test, expect} from '../../fixtures/fixtures.ts';
import loginData from '../../test-data/login-data.json';
import { RandomDataUtil } from '../../utils/random-data-generator';



test('Login with valid credentials and logout', async ({loginPage, homePage, page}) => {

    await loginPage.navigateToLoginPage();
    
    await loginPage.login(loginData[0].email, loginData[0].password);

    await expect(loginPage.accountInfoBtn).toBeVisible();

    //Logout
    await homePage.clickLogout();
    await expect(homePage.getLogoutMessage()).toBeVisible();

});

test('Login with invalid credentials', async ({loginPage, page}) => {

    await loginPage.navigateToLoginPage();
    
    await loginPage.login(RandomDataUtil.getEmail(), RandomDataUtil.getPassword());

    await expect(loginPage.getWarningMessage()).toContainText('No match');

});


