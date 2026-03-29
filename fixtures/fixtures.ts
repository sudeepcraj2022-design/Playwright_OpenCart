import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { RegistrationPage } from '../pages/registration-page';
import { DesktopPage } from '../pages/desktops-page';
import { CartPage } from '../pages/cart-page';
import { SearchResultsPage } from '../pages/search-results-page';
import { ProductComparisonPage } from '../pages/product-comparison-page';
import { WishListPage } from '../pages/wishlist-page';

// 1. Define the types for your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  registrationPage: RegistrationPage;
  desktopPage: DesktopPage;
  cartPage: CartPage;
  searchReultsPage: SearchResultsPage;
  productComparisonPage: ProductComparisonPage;
  wishlistPage: WishListPage;
};

// 2. Extend the base test object
export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.navigateTo('/index.php?route=account/register');
    await use(registrationPage);
  },

  desktopPage: async ({ page }, use) => {
    const desktopPage = new DesktopPage(page);
    await use(desktopPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  searchReultsPage: async ({ page }, use) => {
    const searchReultsPage = new SearchResultsPage(page);
    await use(searchReultsPage);
  },

  productComparisonPage: async ({ page }, use) => {
    const productComparisonPage = new ProductComparisonPage(page);
    await use(productComparisonPage);
  },

  wishlistPage: async ({ page }, use) => {
    const wishlistPage = new WishListPage(page);
    await use(wishlistPage);
  },
});

// 3. Export expect so you don't have to import it everywhere
export { expect } from '@playwright/test';