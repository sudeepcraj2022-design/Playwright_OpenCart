import {test, expect} from '../../fixtures/fixtures.ts';
import { BasePage } from '../../pages/base-page';
import { RandomDataUtil } from '../../utils/random-data-generator';

test ('User Registration Test', async({homePage, registrationPage, page}) => {
    
    await homePage.navigateToHome()
    await homePage.clickRegister();

    await registrationPage.register(
        RandomDataUtil.getFirstName(),
        RandomDataUtil.getLastName(),
        RandomDataUtil.getEmail(), 
        RandomDataUtil.getPhoneNumber(),
        RandomDataUtil.getPassword());
    
    await expect(registrationPage.successLink).toBeVisible();

});