import { test, expect } from '../../fixtures/fixtures.ts';

test('Add items and compare', async ({ desktopPage, productComparisonPage, page }) => {

    await desktopPage.navigateToDesktops();
    const productName1 = 'HTC Touch HD'
    const productName2 = 'iPhone'
    await desktopPage.compareProducts(productName1, productName2)
    await desktopPage.clickProductCompare();
    const actualProductNames = await productComparisonPage.getProductNames();
    expect(actualProductNames).toContain(productName1);
    expect(actualProductNames).toContain(productName1);
    console.log(actualProductNames);
   

})