import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { RegistrationPage } from '../pages/registration-page';
import { DesktopPage } from '../pages/desktops-page';
import { CartPage } from '../pages/cart-page';

// 1. Define the types for your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  registrationPage: RegistrationPage;
  desktopPage: DesktopPage;
  cartPage: CartPage;
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

    desktopPage: async ({ page }, use) => {
    const desktopPage = new DesktopPage(page);
    await desktopPage.navigateTo('index.php?route=product/category&path=20');
    await use(desktopPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

// 3. Export expect so you don't have to import it everywhere
export { expect } from '@playwright/test';