import { setDefaultTimeout, Before, After } from "@cucumber/cucumber";

setDefaultTimeout(30 * 1000);

Before(async function () {
    await this.init();
});

After(async function () {
    await this.close();
});