const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page.js');
const { ProductsPage } = require('../pages/products.page.js');
const { ShoppingCartPage } = require('../pages/shopping-cart.page.js');
const { CheckoutPage } = require('../pages/checkout.page.js');
const { CheckoutOverviewPage } = require('../pages/checkout-overview.page.js');
const { CompletePage } = require('../pages/complete.page.js');
const { Config } = require('../config.js');


async function login(page) {
  let config = new Config();
  let homePage = new HomePage(page);
  let productsPage = new ProductsPage(page);
  let shoppingCartPage = new ShoppingCartPage(page);
  let checkoutPage = new CheckoutPage(page);
  let checkoutOverviewPage = new CheckoutOverviewPage(page);
  await homePage.goto();
  await homePage.login(config.username, config.password);
  await productsPage.addToCartSauceLabsBackpack();
  await productsPage.goToShoppingCart();
  await shoppingCartPage.checkout();
  await checkoutPage.fillOutForm(config.firstName, config.lastName, config.postalCode);
  await checkoutPage.continue();
  await checkoutOverviewPage.finish();
}


module.exports = { login };