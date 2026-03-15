import {test, expect} from '../../fixtures/fixtures.ts';

test('Add item to cart', async({desktopPage, page}) => {

    
    await desktopPage.navigateTo('index.php?route=product/category&path=20');
    const itemName = 'HTC Touch HD'
    await desktopPage.addItemToCart(itemName);
    const successMessage = desktopPage.getSuccessMessage();
    await expect(successMessage).toContainText(`Success: You have added ${itemName} to your shopping cart!`)

    await page.pause();



})

