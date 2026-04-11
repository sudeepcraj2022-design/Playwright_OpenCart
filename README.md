# OpenCart Automation Framework - Playwright & TypeScript

This was my foundational project in Playwright, where I focused on implementing a robust, industry-standard automation architecture for a complex e-commerce platform.

### 🚀 Key Features & Architecture
* **Page Object Model (POM):** Clean separation of locators and actions to ensure maintainable code.
* **Global Setup & State Management:** Implemented a global authentication step that saves the browser state to a JSON file, allowing tests to start in a logged-in state without re-authenticating for every spec.
* **Data Generation:** Integrated the **Faker** library in a `utils` layer to generate dynamic user data for registrations and checkouts.
* **Fixtures:** Custom Playwright fixtures to handle page initialization, reducing boilerplate code in test files.
* **API Testing:** Included API test scripts to verify backend endpoints alongside UI flows.

### 🛠 Tech Stack
* **Language:** TypeScript
* **Engine:** Playwright
* **Libraries:** Faker (Data Gen), Dotenv (Env Management)
