import {test, expect} from '../../fixtures/fixtures.ts';

test('should access account page directly', async ({ loginPage, page }) => {

    //const cookies = await page.context().cookies();
    //console.log('Cookies loaded:', cookies);

    // Navigate directly to the account page (bypassing login)
    await loginPage.navigateToLoginPage();

    // If the global setup worked, this element will be visible immediately
    // Replace 'My Account' with the actual text or selector on your page
    await expect(loginPage.accountInfoBtn).toBeVisible();

});