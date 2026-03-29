import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class SearchResultsPage extends BasePage {
    private readonly pageUrl = '/index.php?route=product/search'
    private readonly categoriesDropDown;
    private readonly productNames;
    private readonly noProductsMessage;


    constructor(page: Page) {
        super(page);
        this.categoriesDropDown = page.getByRole('combobox');
        this.productNames = page.locator('.caption h4')
        this.noProductsMessage = page.getByText('There is no product that matches the search criteria.', { exact: true })
    }


    //Navigation method
    async navigateToSearch() {
        this.page.goto(this.pageUrl);
    }

    //Action methods


    //Getter methods
    getProductNames() {
        return this.productNames;
    }

    getnNoProductsMessage() {
        return this.noProductsMessage;
    }

}