import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage {

    private readonly pageUrl = 'index.php?route=product/category&path=20';
    private readonly buttonsContainer: Locator;
    private readonly continueShoppingBtn: Locator;
    private readonly checkoutButton: Locator;
    private readonly cartRow: Locator;



    constructor(page: Page){
        super(page);
        this.buttonsContainer = page.locator('div.buttons.clearfix');
        this.continueShoppingBtn = this.buttonsContainer.getByRole('link', {name: 'Continue Shopping'});
        this.checkoutButton = this.buttonsContainer.getByRole('link', {name: 'Checkout'});
        this.cartRow = page.locator('#content table tbody tr');

    }

    //Action methods

    async navigateToCart() {
        await this.page.goto(this.pageUrl);
        
    }

    async removeItemFromCart(productName: string){
        const productRow = this.cartRow.filter({hasText: productName});
        await productRow.locator('button[data-original-title="Remove"]').click();
    }

    getProductRow(productName: string): Locator {
        return this.cartRow.filter({ hasText: productName });
        
    }

    getCartEmptyMessage(){
        return this.page.locator('#content').getByText('Your shopping cart is empty!', { exact: true });
    }

}