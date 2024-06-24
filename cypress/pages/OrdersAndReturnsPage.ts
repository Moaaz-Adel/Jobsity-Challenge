/// <reference types="cypress" />

class OrdersAndReturnsPage {
  readonly errorValidationMessage = "This is a required field.";
  Selectors = {
    // Form Locators
    hdrOrdersAndReturns: () => cy.get("data-ui-id='page-title-wrapper"),
    txtOrderId: () => cy.get("#oar-order-id"),
    txtLastName: () => cy.get("#oar-billing-lastname"),
    ddlFindOrderBy: () => cy.get("#quick-search-type-id"),
    lblEmail: () => cy.get("#oar-email span"),
    txtEmail: () => cy.get("#oar_email"),
    lblZipCode: () => cy.get("#oar-zip span"),
    txtZipCode: () => cy.get("#oar-zip"),
    btnContinue: () => cy.get('button[title="Continue"].primary'),
    // Validation Messages
    lblOrderIdError: () =>
      cy.contains("#oar-order-id-error", this.errorValidationMessage),
    lblLastNameError: () =>
      cy.contains("#oar-billing-lastname-error", this.errorValidationMessage),
    lblEmailError: () => cy.get("#oar_email-error"),
    lblZipCodeError: () => cy.get("#oar_zip-error"),

    lblIncorrectDataInfoPanel: () =>
      cy.contains(
        "[data-ui-id='message-error']",
        "You entered incorrect data. Please try again."
      ),
  };
  /**
   * Submits an order form with the given parameters.
   *
   * @param {number} [orderId] - The ID of the order.
   * @param {string} [lastName] - The last name of the person associated with the order.
   * @param {string} [findOrderBy] - The criteria to find the order by.
   * @param {string} [email] - The email associated with the order.
   */
  submitOrderForm(
    orderId?: number,
    lastName?: string,
    findOrderBy?: string,
    input?: string,
    isZipCode?: boolean
  ) {
    if (orderId) {
      this.Selectors.txtOrderId().type(orderId.toString());
    }
    if (lastName) {
      this.Selectors.txtLastName().type(lastName);
    }
    if (findOrderBy) {
      this.Selectors.ddlFindOrderBy().select(findOrderBy);
    }
    if (input) {
      if (isZipCode) {
        this.Selectors.txtZipCode().type(input); // Replace with appropriate selector and action for ZIP code input
      } else {
        this.Selectors.txtEmail().type(input); // Assuming txtEmail() is used for email input
      }
    }
    this.Selectors.btnContinue().click();
  }

  verifySwitchingBetweenEmailAndZipOptions(findOrderBy: string) {
    this.Selectors.ddlFindOrderBy().select(findOrderBy);
  }
}

export const ordersAndReturnsPage = new OrdersAndReturnsPage();
