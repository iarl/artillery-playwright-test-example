const { Config } = require('../config.js');
let config = new Config();

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login-button');
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
  }

  async goto() {
    await this.page.goto(config.url);
  }

  async login(email, password) {
    await this.usernameInput.first().fill(email);
    await this.passwordInput.first().fill(password);
    await this.loginButton.first().click();
  }
}