exports.ProductsPage = class ProductsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addToCartSauceLabsBackpackLink = page.locator('#add-to-cart-sauce-labs-backpack');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async addToCartSauceLabsBackpack() {
    await this.addToCartSauceLabsBackpackLink.first().click();
  }

  async goToShoppingCart() {
    await this.shoppingCartLink.first().click();
  }
}