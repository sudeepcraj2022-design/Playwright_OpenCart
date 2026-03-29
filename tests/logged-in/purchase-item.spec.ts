import { test, expect } from '../../fixtures/fixtures.ts';

test('Add item to cart and remove item', async ({ desktopPage, cartPage, page }) => {

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

test('Update count', async ({ desktopPage, cartPage, page }) => {

    await desktopPage.navigateToDesktops();
    const itemName = 'HTC Touch HD'
    const updateCount = '1'
    await desktopPage.addItemToCart(itemName);
    await desktopPage.addItemToCart(itemName);
    const successMessage = desktopPage.getSuccessMessage();
    await expect(successMessage).toContainText(`Success: You have added ${itemName} to your shopping cart!`)

    //Navigate to checkout page
    await desktopPage.clickCheckout();
    await cartPage.updateItemCount(itemName, updateCount);
    await expect(cartPage.getCartWeightMessage()).toBeVisible();
    await expect(cartPage.getCartWeightMessage()).toContainText('(0.15kg)');
    await cartPage.removeItemFromCart(itemName);
    await expect(cartPage.getCartEmptyMessage()).toBeVisible();

})

test('Add multiple items to cart and remove all', async ({ desktopPage, cartPage, page }) => {

    await desktopPage.navigateToDesktops();
    const itemNames: string[] = ['HTC Touch HD', 'iPhone', 'iPod Classic', 'Palm Treo Pro'];
    const lastItem: string = 'Palm Treo Pro';
    await desktopPage.addMultipleItemsToCart(itemNames)
    const successMessage = desktopPage.getSuccessMessage();
    await expect(successMessage).toContainText(`Success: You have added ${lastItem} to your shopping cart!`)

    //Navigate to checkout page
    await desktopPage.clickCheckout();
    await cartPage.removeMultipleItemsFromCart(itemNames);
    await expect(cartPage.getCartEmptyMessage()).toBeVisible();

})



