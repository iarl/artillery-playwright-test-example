exports.CheckoutOverviewPage = class CheckoutOverviewPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.finishButton = page.locator('#finish');
      this.cancelButton = page.locator('#cancel');
    }

    async finish() {
        await this.finishButton.first().click();
    }

    async cancel() {
        await this.cancelButton.first().click();
    }
  }