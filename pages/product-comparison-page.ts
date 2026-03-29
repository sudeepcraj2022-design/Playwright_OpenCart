import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class ProductComparisonPage extends BasePage {
    private readonly pageUrl = '/index.php?route=product/compare'
    private readonly comparisonHeading: Locator;


    constructor(page: Page) {
        super(page)
        this.comparisonHeading = page.locator('#content table tbody tr').first().locator('td');
    }


    //Action methods




    //Getter methods
    async getProductNames(): Promise<string[]> {
        let productNames: string[] = await this.comparisonHeading.allTextContents();
        return productNames

    }

}