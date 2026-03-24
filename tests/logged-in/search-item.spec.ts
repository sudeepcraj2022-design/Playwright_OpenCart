import {test, expect} from '../../fixtures/fixtures.ts';

test('Search for a specific item', async({homePage, searchReultsPage, page}) => {

    await homePage.navigateToHome();
    const itemName = 'MacBook';
    await homePage.searchItem('MacBook');
   
    const productNames = searchReultsPage.getProductNames();
    await expect(productNames.first()).toBeVisible();

    const count = await productNames.count();
    for(let i = 0; i < count; i++){
        await expect(productNames.nth(i)).toContainText(itemName, {ignoreCase: true});
    }

})