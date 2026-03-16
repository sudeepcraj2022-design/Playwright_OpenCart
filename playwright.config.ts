import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({ 
  testDir: './tests',
  testIgnore: '**/api-tests/**',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://tutorialsninja.com/demo/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', 
    viewport: { width: 1920, height: 1080 },
    // Optional: Ignore SSL errors if you're testing a dev site
    //ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    // 1. The Setup Project: Runs once for authentication
  {
    name: 'setup',
    testMatch: /auth\.setup\.ts/,
  },

  // 2. Authenticated Project: Only for tests requiring login
  {
    name: 'authenticated',
    use: { 
      ...devices['Desktop Chrome'], // Keep device settings here
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
    testMatch: /tests\/logged-in\/.*\.spec\.ts/, // Matches your folder structure
  },

  // 3. Anonymous Project: Only for public-facing tests
  {
    name: 'public',
    use: { 
      ...devices['Desktop Chrome'], // Keep device settings here
      storageState: undefined,     // Explicitly no cookies
    },
    testMatch: /tests\/public\/.*\.spec\.ts/, // Matches your folder structure
  },

  // 4. API Project: No browser needed, just requests
  {
    name: 'api',
    testMatch: /tests\/api-tests\/.*\.spec\.ts/, // This fixes the visibility!
    use: {
      // You can set global API settings here if you want
      //baseURL: 'https://restful-booker.herokuapp.com',
    },
  },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
