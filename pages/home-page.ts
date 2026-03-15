import {Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class HomePage extends BasePage{

    private readonly homeButton: Locator;
    private readonly currencyDropDown: Locator;
    private readonly searchField: Locator;
    private readonly searchButton: Locator;
    private readonly cartTotal: Locator;
    private readonly myAccountMenu: Locator; 
    private readonly wishListLink: Locator;
    private readonly registerLink: Locator;
    private readonly loginLink: Locator;
    private readonly logoutLink: Locator;
    private readonly allDeskTopsLink: Locator;
    private readonly desktopDropdwn: Locator;
    
constructor(page: Page){
        super(page)

        this.homeButton = this.page.locator('#logo');
        this.currencyDropDown = this.page.locator('#form-currency');
        this.searchField = this.page.getByPlaceholder('Search');
        this.searchButton = this.page.locator('#search button');
        this.cartTotal = this.page.getByTitle('Shopping Cart');
        this.wishListLink = this.page.locator('#wishlist-total');
        this.myAccountMenu = this.page.getByTitle('My Account');
        this.registerLink = this.page.getByRole('link', { name: 'Register' });
        this.loginLink = this.page.getByRole('link', { name: 'Login' });
        this.logoutLink = this.page.locator('ul.dropdown-menu').getByRole('link', { name: 'Logout' });
        this.allDeskTopsLink = this.page.getByRole('link', { name: 'Show AllDesktops' });
        this.desktopDropdwn = this.page.getByText('Desktops', { exact: true })
    }

        async clickLogin() {
        await this.myAccountMenu.click();
        await this.loginLink.click();
    }

    async clickRegister() {
        await this.myAccountMenu.click();
        await this.registerLink.click();
    }

    async clickLogout() {
        await this.myAccountMenu.click();
        await this.logoutLink.click();
    }

    async clickHome() {
        await this.homeButton.click();
    }

    async clickShowAllDesktops() {
        await this.desktopDropdwn.hover();
        await this.allDeskTopsLink.click();
    }

}