exports.ShoppingCartPage = class ShoppingCartPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.checkoutButton = page.locator('#checkout');
      this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async checkout() {
      await this.checkoutButton.first().click();
    }

    async continueShopping() {
      await this.continueShoppingButton.first().click();
    }
  }