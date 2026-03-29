import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class WishListPage extends BasePage {
    private readonly pageUrl = '/index.php?route=account/wishlist'
    private readonly wishlistRow: Locator;
    private readonly successMessage: Locator;



    constructor(page: Page) {
        super(page);
        this.wishlistRow = page.locator('tr');
        this.successMessage = page.locator('.alert-success')
    }


    //Navigation Method
    async navigateWishlist() {
        await this.page.goto(this.pageUrl);

    }
    //Action methods
    async removeItemFromWishlist(productName: string) {
        const removeButton = this.wishlistRow.filter({ hasText: productName }).locator('.btn-danger');
        await removeButton.click();
    }

    //Getter methods
    getSuccessMessage() {
        return this.successMessage;
    }


}