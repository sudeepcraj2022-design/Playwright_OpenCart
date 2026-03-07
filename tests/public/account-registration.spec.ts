import {expect, test} from '@playwright/test';
import { BasePage } from '../../pages/base-page';
import{HomePage} from '../../pages/home-page';
import { RegistrationPage } from '../../pages/registration-page';
import { RandomDataUtil } from '../../utils/random-data-generator';

test ('User Registration Test', async({page}) => {
    
    const homePage = new HomePage(page);
    await homePage.navigateTo('');
    await homePage.clickRegister();

    const registrationPage = new RegistrationPage(page);

    await registrationPage.register(
        RandomDataUtil.getFirstName(),
        RandomDataUtil.getLastName(),
        RandomDataUtil.getEmail(), 
        RandomDataUtil.getPhoneNumber(),
        RandomDataUtil.getPassword());
    
    await expect(registrationPage.successLink).toBeVisible();

});