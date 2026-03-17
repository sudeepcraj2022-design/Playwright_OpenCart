import {test, expect} from '../../fixtures/fixtures.ts';

test('Add item to cart and remove item', async({desktopPage, cartPage, page}) => {

    await desktopPage.navigateToDesktops();
    const itemName = 'HTC Touch HD'
    await desktopPage.addItemToCart(itemName);
    const successMessage = desktopPage.getSuccessMessage();
    await expect(successMessage).toContainText(`Success: You have added ${itemName} to your shopping cart!`)

    //Navigate to checkout page
    await desktopPage.clickCheckout();
    await cartPage.removeItemFromCart(itemName);
    await expect(cartPage.getCartEmptyMessage()).toBeVisible();

})



