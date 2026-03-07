import {test, expect, Page} from "@playwright/test";
import {LoginPage} from "../../pages/login-page";
import loginData from '../../test-data/login-data.json';

for(const data of loginData){
    test(`Login Data Driven: ${data.description} ${data.testId}`, async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('index.php?route=account/login');

    await loginPage.login(data.email, data.password);

    if(data.expectedStatus === 'success'){
        await expect(loginPage.accountInfoBtn).toBeVisible();
    }else{
        await expect(loginPage.errorMessage).toBeVisible();
    }
});

}


