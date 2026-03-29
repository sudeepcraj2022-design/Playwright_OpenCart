import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class DesktopPage extends BasePage {

    private readonly pageUrl = 'index.php?route=product/category&path=20';
    private readonly productContainer: Locator;
    private readonly successMessage: Locator;
    private readonly checkoutButton: Locator;
    private readonly productComparisonLink: Locator;

    constructor(page: Page) {
        super(page);
        this.productContainer = page.locator('.product-thumb');
        this.successMessage = page.locator('.alert.alert-success.alert-dismissible');
        this.checkoutButton = page.getByTitle('Checkout');
        this.productComparisonLink = page.getByRole('link', { name: 'product comparison' });
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


    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async addMultipleItemsToCart(productNames: string[]) {
        for (const name of productNames) {
            const product = this.productContainer.filter({ hasText: name });
            await product.getByRole('button', { name: 'Add to Cart' }).click();
        }

    }

    async compareProducts(productName1: string, productName2: string) {
        const product1 = this.productContainer.filter({ hasText: productName1 });
        const product2 = this.productContainer.filter({ hasText: productName2 });
        await product1.locator('button[data-original-title="Compare this Product"]').click();
        await product2.locator('button[data-original-title="Compare this Product"]').click();
    }

    async addToWishlist(productName: string) {
        const product = this.productContainer.filter({ hasText: productName});
        await product.locator('button[data-original-title="Add to Wish List"]').click();
    }

    async clickProductCompare() {
        await this.productComparisonLink.click()
    }

    //getter methods
    getSuccessMessage() {
        return this.successMessage;
    }

}