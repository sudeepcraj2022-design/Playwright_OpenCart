import {test, expect} from '../../fixtures/fixtures.ts';

test('Search for a specific item', async({homePage, searchReultsPage, page}) => {

    await homePage.navigateToHome();
    const itemName = 'MacBook';
    await homePage.searchItem(itemName);
   
    const productNames = searchReultsPage.getProductNames();
    await expect(productNames.first()).toBeVisible();

    const count = await productNames.count();
    for(let i = 0; i < count; i++){
        await expect(productNames.nth(i)).toContainText(itemName, {ignoreCase: true});
    }

})

test('Search for invalid item', async({homePage, searchReultsPage, page}) => {

    await homePage.navigateToHome();
    await homePage.searchItem('test');
   
    await expect(searchReultsPage.getnNoProductsMessage()).toBeVisible();

    await expect(searchReultsPage.getnNoProductsMessage()).toContainText('no product that matches')

})

test('Search for a specific item with partial keyword', async({homePage, searchReultsPage, page}) => {

    await homePage.navigateToHome();
    const itemName = 'Mac';
    await homePage.searchItem(itemName);
   
    const productNames = searchReultsPage.getProductNames();
    await expect(productNames.first()).toBeVisible();

    const count = await productNames.count();
    for(let i = 0; i < count; i++){
        await expect(productNames.nth(i)).toContainText(itemName, {ignoreCase: true});
    }

})