/// <reference types="cypress" />
import { ordersAndReturnsPage } from "../pages/OrdersAndReturnsPage.ts";

import { faker } from "@faker-js/faker";

describe("Orders and Returns Validations", () => {
  beforeEach("Setup", () => {
    cy.visit("/sales/guest/form/");
  });

  context("Order ID Field validations", () => {
    it("should shows validation text when order id empty", () => {
      ordersAndReturnsPage.submitOrderForm(
        undefined,
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblOrderIdError().should("be.visible");
    });

    it("should shows validation when entering Order ID with Letters", () => {
      ordersAndReturnsPage.submitOrderForm(
        "Moaaz1234",
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });

    it("should shows validation when entering Order ID Special Characters", () => {
      ordersAndReturnsPage.submitOrderForm(
        "$1234#!@",
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });

    it("should shows validation when entering Order ID with Spaces", () => {
      ordersAndReturnsPage.submitOrderForm(
        "123 405",
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });

    it("should shows validation when entering Order ID with Long Input", () => {
      ordersAndReturnsPage.submitOrderForm(
        "123651658185161861881146891861868181186818615616819165",
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });
  });

  context("Billing Last Name Field Validations", () => {
    it.only("should shows validation text when leaving last name field Empty", () => {
      ordersAndReturnsPage.submitOrderForm(
        "123456789",
        undefined,
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblLastNameError().should("be.visible");
    });

    it("should shows validation when entering Last Name with Numbers", () => {
      ordersAndReturnsPage.submitOrderForm(
        "1234",
        "Moaaz123456488",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });

    it("should shows validation when entering Last Name with Special Characters", () => {
      ordersAndReturnsPage.submitOrderForm(
        "132456",
        "$Moaaz#!@",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });

    it("should shows validation trying to SQL injection with Last Name", () => {
      ordersAndReturnsPage.submitOrderForm(
        "Moaaz Adel",
        "SELECT * FROM Users WHERE UserId = 1 OR 1=1;",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });
  });

  context("Email Field validations", () => {
    it("should NOT shows validation text when entering valid email format", () => {
      ordersAndReturnsPage.submitOrderForm(
        "12345",
        "Moaaz",
        "Email",
        "moaaz.adel@jobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblEmailError().should("not.exist");
    });

    it("should shows validation text when order Email empty", () => {
      ordersAndReturnsPage.submitOrderForm("1234564", "Moaaz", "Email", "");
      ordersAndReturnsPage.Selectors.lblEmailError().should("be.visible");
    });

    it("should shows validation when entering invalid email format without '@'", () => {
      ordersAndReturnsPage.submitOrderForm(
        "Moaaz1234",
        "Moaaz",
        "Email",
        "moaaz.adeljobsity.com"
      );
      ordersAndReturnsPage.Selectors.lblEmailError().should(
        "contain.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      );
    });
  });

  context("Find Order By Field Validations", () => {
    it("Default Selection (Email)", () => {
      ordersAndReturnsPage.verifySwitchingBetweenEmailAndZipOptions("Email");
      ordersAndReturnsPage.Selectors.lblEmail().should("be.visible");
    });

    it("Select by ZIP Code", () => {
      ordersAndReturnsPage.verifySwitchingBetweenEmailAndZipOptions("ZIP Code");
      ordersAndReturnsPage.Selectors.lblZipCode().should("be.visible");
    });
  });

  context("ZIP Code Field validations", () => {
    it("should accepts valid ZIP Code format", () => {
      ordersAndReturnsPage.submitOrderForm(
        "12345",
        "Moaaz",
        "ZIP Code",
        "12345",
        true
      );
      ordersAndReturnsPage.Selectors.lblZipCodeError().should("not.exist");
    });

    it("should shows validation text when ZIP Code field is empty", () => {
      ordersAndReturnsPage.submitOrderForm(
        "1234564",
        "Moaaz",
        "ZIP Code",
        "",
        true
      );
      ordersAndReturnsPage.Selectors.lblZipCodeError().should("be.visible");
    });

    it("should shows validation when entering invalid Zip Code with Special Characters", () => {
      ordersAndReturnsPage.submitOrderForm(
        "Moaaz1234",
        "Moaaz",
        "ZIP Code",
        "!!!!123456$$$",
        true
      );
      ordersAndReturnsPage.Selectors.lblIncorrectDataInfoPanel().should(
        "be.visible"
      );
    });
  });

  context("General Validations", () => {
    it("should shows validation text when leaving all fields empty", () => {
      ordersAndReturnsPage.submitOrderForm();
      ordersAndReturnsPage.Selectors.lblOrderIdError().should("be.visible");
      ordersAndReturnsPage.Selectors.lblLastNameError().should("be.visible");
      ordersAndReturnsPage.Selectors.lblEmailError().should("be.visible");
    });

    it("switching 'Find Order By' and Verifying Corresponding Field", () => {
      ordersAndReturnsPage.verifySwitchingBetweenEmailAndZipOptions("ZIP Code");
    });
  });
});
