import {test, expect} from '../../fixtures/fixtures.ts';
import loginData from '../../test-data/login-data.json';


test('Login with valid credentials', async ({loginPage, page}) => {

    await loginPage.login(loginData[0].email, loginData[0].password);

    await expect(loginPage.accountInfoBtn).toBeVisible();

    await page.pause();

});

