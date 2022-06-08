exports.CompletePage = class CompletePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.titleLink = page.locator('.title');
    }
  
    async titleText() {
      return await this.titleLink.first().innerText();
    }
  }