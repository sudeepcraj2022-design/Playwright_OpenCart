import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegistrationPage extends BasePage {

    private readonly pageUrl = '/index.php?route=account/register';
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly emailField: Locator;
    private readonly telephoneField: Locator;
    private readonly passwordField: Locator;
    private readonly passwordConfirmField: Locator;
    private readonly privacyPolicyCheckBox: Locator;
    private readonly continueBtn: Locator;
    public readonly successLink: Locator;
    private readonly warningMessage: Locator;
    private readonly missingFieldMessages: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameField = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameField = page.getByLabel('Last Name', { exact: true });
        this.emailField = page.getByLabel('E-Mail', { exact: true });
        this.telephoneField = page.getByLabel('Telephone', { exact: true });
        this.passwordField = page.getByLabel('Password', { exact: true });
        this.passwordConfirmField = page.getByLabel('Password Confirm', { exact: true });
        this.privacyPolicyCheckBox = page.getByRole('checkbox');
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.successLink = page.getByRole('link', { name: 'Success' });
        this.warningMessage = page.locator('.alert-danger');
        this.missingFieldMessages = page.locator('.text-danger');

    }


    //Navigation Method
    async navigateToRegistration() {
        await this.page.goto(this.pageUrl);
    }

    //Action Methods
    async register(
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        password: string) {

        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.telephoneField.fill(telephone);
        await this.passwordField.fill(password);
        await this.passwordConfirmField.fill(password);
        await this.privacyPolicyCheckBox.check();
        await this.continueBtn.click();

    }

    async clickContinue() {
        this.continueBtn.click();
    }
    
    //Getter methods
    getWarningMessage(){
        return this.warningMessage;
    }

    getMissingFieldMessages(){
        return this.missingFieldMessages;
    }


}

