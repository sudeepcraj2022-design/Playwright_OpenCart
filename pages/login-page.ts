import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    private readonly pageUrl = 'index.php?route=account/login';
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly forgotPassword: Locator;
    private readonly loginButton: Locator;
    private readonly continueBtn: Locator;
    public readonly accountInfoBtn: Locator;
    private readonly warningMessage: Locator;


    constructor(page: Page) {
        super(page);

        this.emailInput = page.getByLabel('E-Mail Address', { exact: true });
        this.passwordInput = page.getByLabel('Password', { exact: true });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPassword = page.locator('#content').getByRole('link', { name: 'Forgotten Password' });
        this.continueBtn = page.getByRole('link', { name: 'Continue' });
        this.accountInfoBtn = page.getByRole('link', { name: 'Edit your account information' });
        this.warningMessage = page.locator('.alert-danger');
    
    }

    //Navigation Method
    async navigateToLoginPage() {
        await this.page.goto(this.pageUrl);

    }

    //Action Methods

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

    async clickContinueToRegister() {
        await this.continueBtn.click();

    }

    //Getter methods
    getWarningMessage(){
        return this.warningMessage;
    }


}

