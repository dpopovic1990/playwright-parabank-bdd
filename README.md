# 🧪 Playwright + TypeScript Automation Framework  
### ParaBank Demo Application (UI • API • BDD • CI)

This repository showcases a **complete end-to-end test automation framework** built with **Playwright + TypeScript**, following modern engineering standards and clean architecture principles.

The framework includes:

- 🔹 UI Automation (Playwright Test + Page Object Model)
- 🔹 API Testing (Playwright APIRequestContext)
- 🔹 BDD (Cucumber.js + Gherkin)
- 🔹 GitHub Actions CI Pipeline
- 🔹 Reporting (HTML, Video, Screenshot on failure)
- 🔹 Multi-project configuration (UI + API)

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

# 💡 Why This Framework?
This project demonstrates:
 - A scalable and maintainable automation architecture
 - Integration of UI + API + BDD in a single solution
 - Deep understanding of Playwright best practices
 - Practical usage of POM with TypeScript
 - Strong CI integration using GitHub Actions
 - Production-level code organization suitable for large QA teams

It serves as a portfolio-grade demonstration of senior-level automation engineering skills.

# 👨‍💻 Author
**Danijel Popović**  
- Principal QA Engineer / Test Automation Architect  
- 10+ years in Automation & QA Leadership  
- Specialized in Test Strategy, Framework Architecture, and CI/CD  
- Focus on TypeScript, Playwright, Selenium, and modern QA engineering practices

# ⭐ Support
If you find this repository useful, feel free to star ⭐ it on GitHub or reach out for collaboration.