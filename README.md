# 🧪 Playwright + TypeScript Automation Framework  
### ParaBank Demo Application (UI • API • BDD • CI)

This repository showcases a **complete end-to-end test automation framework** built with **Playwright + TypeScript**, following modern engineering standards and clean architecture principles.

<p align="left">
  <img src="https://img.shields.io/github/actions/workflow/status/dpopovic1990/playwright-parabank-bdd/tests.yml?label=CI%20Build&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Playwright-Testing-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/Cucumber-BDD-23d96c?style=for-the-badge&logo=cucumber&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

This repository demonstrates:

- UI functional testing with **Playwright**
- API testing with **Playwright APIRequestContext**
- BDD scenarios using **Cucumber.js**
- TypeScript strong typing and POM structure
- GitHub Actions CI with full regression pipeline
- Clean automation architecture suitable for enterprise-level QA engineering

It serves as a portfolio-grade example of senior-level test automation design.

## 🎯 Background & Motivation

This project showcases my approach to designing maintainable, scalable, and production-ready automation frameworks.  
It demonstrates real-world QA engineering principles, such as:

- Clean separation of concerns  
- Domain-driven automation design  
- Strongly typed test code (TypeScript)  
- Extensibility for UI, API, and BDD  
- Reuse of Playwright fixtures  
- CI-ready test execution  

Demo application under test:  
➡ **https://parabank.parasoft.com/parabank**


# 📂 Project Structure
```bash
playwright-parabank-bdd/
│
├── src/
│   ├── tests/               # UI tests (Playwright Test Runner)
│   ├── api/                 # API tests
│   ├── pages/               # Page Object Model (POM)
│   ├── bdd/
│   │   ├── features/        # Gherkin feature files
│   │   ├── steps/           # Step definitions
│   │   ├── hooks.ts         # BDD lifecycle (Before/After)
│   │   └── world.ts         # Custom world (Playwright browser/page)
│   └── utils/               # Shared utilities (if needed)
│
├── playwright.config.ts     # Playwright config + UI/API projects
├── package.json
├── tsconfig.json
├── .github/workflows/tests.yml   # GitHub Actions CI pipeline
└── README.md
```

# 🧱 Framework Architecture
                   ┌──────────────────────────┐
                   │      Feature Files        │  ← BDD (Gherkin)
                   └──────────────┬───────────┘
                                  │
                   ┌──────────────▼───────────────┐
                   │       Step Definitions        │  ← Gherkin → POM
                   └──────────────┬───────────────┘
                                  │
                   ┌──────────────▼───────────────┐
                   │     Page Objects (POM)        │  ← login.page, accounts.page…
                   └──────────────┬───────────────┘
                                  │
                 ┌────────────────▼────────────────────┐
                 │     Playwright Test Runner           │
                 │     - UI tests                       │
                 │     - API tests                      │
                 └────────────────┬────────────────────┘
                                  │
                 ┌────────────────▼────────────────────┐
                 │     GitHub Actions CI Pipeline       │
                 └─────────────────────────────────────┘

# 🚀 Getting Started
## 📦 Install dependencies
```bash
npm install
```

# ▶️ Running UI Tests
```bash
npm run test
```

UI test files are located under:
```bash
src/tests/ui/*.spec.ts
```

View the latest HTML report:
```bash
npx playwright show-report
```

# 🌐 Running API Tests
```bash
npx playwright test --project=api
```

API tests live in:
```bash
src/api/tests/*.spec.ts
```

# 🥒 Running BDD Tests (Cucumber.js)
```bash
npm run bdd
```

Feature files:
```bash
src/bdd/features/*.feature
```

Step definitions:
```bash
src/bdd/steps/*.ts
```

# 📘 Implemented Scenarios
✓ UI Test Coverage
 - Login (valid and invalid)
 - Accounts overview (list accounts)
 - Account details
 - Transfer funds functionality

✓ API Test Coverage
 - GET customer profile
 - Negative scenario for non-existing user

✓ BDD Scenarios
 - Given/When/Then flow for login
 - Navigating to Accounts Overview
 - Opening Account Details
 - Transferring funds

# 🤖 Continuous Integration (GitHub Actions)
```bash
.github/workflows/tests.yml
```

CI pipeline performs:
- ✔ Install Node.js & dependencies
- ✔ Install Playwright browsers
- ✔ Run UI tests
- ✔ Run API tests
- ✔ Run BDD tests
- ✔ Validate TypeScript build
- ✔ Generate test reports

Pull requests automatically trigger full regression checks.

# 🧰 Tech Stack
| Technology                        | Purpose                          |
| --------------------------------- | -------------------------------- |
| **Playwright**                    | UI + API test automation         |
| **TypeScript**                    | Strong typing, maintainable code |
| **Cucumber.js**                   | BDD / Gherkin support            |
| **Page Object Model**             | Encapsulation & reusability      |
| **GitHub Actions**                | CI pipeline                      |
| **ts-node + TypeScript compiler** | Execution & build pipeline       |

📸 Reporting
 - HTML report — Playwright standard reporter
 - Video recordings — on failure
 - Screenshots — on failure
 - Traces — optional for debugging

All reports are stored under:
html-report/

# 🧪 Useful Commands
| Command                             | Description           |
| ----------------------------------- | --------------------- |
| `npm run test`                      | Run UI tests          |
| `npm run bdd`                       | Run all BDD scenarios |
| `npx playwright test --project=api` | Run API tests         |
| `npx playwright show-report`        | Open HTML report      |

# 🧱 How to Expand This Framework
### 1. Add centralized test data management
 - /data directory
 - Environment-based configuration
 - Dynamic data builders

### 2. Add hybrid API → UI integration tests
 - Example:
API creates a bank account → UI validates existence.

### 3. Add custom Playwright fixtures
 - Authenticated context
 - Reusable domain actions
 - Custom reporters

### 4. Add test suite grouping
 - smoke
 - regression
 - nightly

### 5. Add Allure reporting
 - Combined UI + API + BDD reports.

### 6. Add Docker support
 - Portable automated test environment for any CI platform.


# 👨‍💻 Author
**Danijel Popović**  
- Principal QA Engineer / Test Automation Architect  
- 10+ years in Automation & QA Leadership  
- Specialized in Test Strategy, Framework Architecture, and CI/CD  
- Focus on TypeScript, Playwright, Selenium, and modern QA engineering practices

# ⭐ Support
If you find this repository useful, feel free to star ⭐ it on GitHub or reach out for collaboration.