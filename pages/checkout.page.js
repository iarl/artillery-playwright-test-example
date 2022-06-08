exports.CheckoutPage = class CheckoutPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.postalCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.cancelButton = page.locator('#cancel');
    }

    async fillOutForm(firstName, lastName, postalCode) {    
      await this.firstNameInput.first().fill(firstName);
      await this.lastNameInput.first().fill(lastName);
      await this.postalCodeInput.first().fill(postalCode);
    }

    async continue() {
        await this.continueButton.first().click();
    }

    async cancel() {
        await this.cancelButton.first().click();
    }
  }