import {test, expect} from '../../fixtures/fixtures.ts';
import loginData from '../../test-data/login-data.json';

for(const data of loginData){
    test(`Login Data Driven: ${data.description} ${data.testId}`, async ({loginPage}) => {


    await loginPage.login(data.email, data.password);

    if(data.expectedStatus === 'success'){
        await expect(loginPage.accountInfoBtn).toBeVisible();
    }else{
        await expect(loginPage.errorMessage).toBeVisible();
    }
});

}


