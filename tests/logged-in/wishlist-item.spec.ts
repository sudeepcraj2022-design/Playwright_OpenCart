import{test, expect} from '../../fixtures/fixtures.ts'

test('Wishlist item and remove from wishlist', async ({desktopPage, homePage, wishlistPage, page}) => {
    const productName = 'Canon EOS 5D'
    const message = 'Success: You have modified your wish list!'
    desktopPage.navigateToDesktops();
    await desktopPage.addToWishlist(productName);
    await homePage.clickWishList();
    await wishlistPage.removeItemFromWishlist(productName);
    await expect(wishlistPage.getSuccessMessage()).toContainText(message);

});