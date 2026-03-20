import { test, expect } from '../../fixtures/fixtures.ts';
import { BasePage } from '../../pages/base-page';
import { RandomDataUtil } from '../../utils/random-data-generator';
import loginData from '../../test-data/login-data.json';

test('User Registration Test', async ({ homePage, registrationPage, page }) => {

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

test('Registration with existing email', async ({ homePage, registrationPage, page }) => {

    await homePage.navigateToHome()
    await homePage.clickRegister();
    const data = loginData[0];

    await registrationPage.register(
        RandomDataUtil.getFirstName(),
        RandomDataUtil.getLastName(),
        data.email,
        RandomDataUtil.getPhoneNumber(),
        RandomDataUtil.getPassword());

    await expect(registrationPage.getWarningMessage()).toContainText('E-Mail Address is already registered');

});


test('Registration with missing fields', async ({ homePage, registrationPage, page }) => {

    await homePage.navigateToHome();
    await homePage.clickRegister();
    await registrationPage.clickContinue();

    const expectedErrors = [
        'First Name must be between 1 and 32 characters!',
        'Last Name must be between 1 and 32 characters!',
        'E-Mail Address does not appear to be valid!',
        'Telephone must be between 3 and 32 characters!',
        'Password must be between 4 and 20 characters!'
    ]

    await expect(registrationPage.getMissingFieldMessages()).toHaveText(expectedErrors);

});