import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    async init() {
        this.browser = await chromium.launch({
            headless: true,
            // slowMo: 200,
        });

        this.context = await this.browser.newContext({
            viewport: { width: 1400, height: 900 }
        });

        this.context.setDefaultTimeout(15000);
        this.page = await this.context.newPage();
        this.page.setDefaultTimeout(15000);
    }

    async close() {
        if (this.page) await this.page.close();
        if (this.context) await this.context.close();
        if (this.browser) await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);