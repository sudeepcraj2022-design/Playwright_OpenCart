import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class DesktopPage extends BasePage {

    private readonly pageUrl = 'index.php?route=product/category&path=20';
    private readonly productContainer: Locator;
    private readonly successMessage: Locator;
    private readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.productContainer = page.locator('.product-thumb');
        this.successMessage = page.locator('.alert.alert-success.alert-dismissible');
        this.checkoutButton = page.getByTitle('Checkout');
    }

    //Navigation Method
    async navigateToDesktops() {
        await this.page.goto(this.pageUrl);

    }

    //Action methods
    async addItemToCart(productName: string) {
        const product = this.productContainer.filter({ hasText: productName });
        await product.getByRole('button', { name: 'Add to Cart' }).click();
    }

    getSuccessMessage() {
        return this.successMessage;
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

}