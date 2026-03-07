import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { RegistrationPage } from '../pages/registration-page';

// 1. Define the types for your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  registrationPage: RegistrationPage;
};

// 2. Extend the base test object
export const test = base.extend<MyFixtures>({
  
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('index.php?route=account/login');
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    // Use your custom navigation method
    await homePage.navigateTo('/'); 
    await use(homePage);
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    // Navigating here ensures the test is ready to register immediately
    await registrationPage.navigateTo('/index.php?route=account/register');
    await use(registrationPage);
  },
});

// 3. Export expect so you don't have to import it everywhere
export { expect } from '@playwright/test';