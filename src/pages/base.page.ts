import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goto(path: string = '/') {
        await this.page.goto(path);
    }


    get title() {
        return this.page.title();
    }
}