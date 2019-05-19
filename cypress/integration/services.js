import { selectors } from "./selectors";

const assertElementContans = (selector, index, expectedText) =>
  cy
    .get(selector)
    .eq(index)
    .should("contain", expectedText);

beforeEach(() => {
  cy.visit("");
});

it("verify content of Services section in desktop view", () => {
  cy.get(selectors.navBar.servicesLink).click();

  cy.get(selectors.services.serviceTile).should("have.length", 3);

  assertElementContans(selectors.services.serviceHeader, 0, "Specifications");
  assertElementContans(selectors.services.serviceHeader, 1, "Visualisation");
  assertElementContans(selectors.services.serviceHeader, 2, "Implementation");

  assertElementContans(
    selectors.services.serviceDescription,
    0,
    "Discussing your requirements and creating technical documentation"
  );

  assertElementContans(
    selectors.services.serviceDescription,
    1,
    "3D visual models of the proposed design solution are presented"
  );

  assertElementContans(
    selectors.services.serviceDescription,
    2,
    "You can appoint us to organise implementation phase"
  );
});
