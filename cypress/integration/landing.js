import { selectors } from "./selectors";

beforeEach(() => {
  cy.visit("");
});

it("nav items should be visible in desktop mode", () => {
  cy.get(selectors.navBar.servicesLink).should("contain", "Services");
  cy.get(selectors.navBar.projectsLink).should("contain", "Projects");
  cy.get(selectors.navBar.testimonialsLink).should("contain", "Testimonials");
  cy.get(selectors.navBar.contactsLink).should("contain", "Contacts");
  cy.get(selectors.ourProjectsButton).should("contain", "Our projects");
  cy.get(selectors.navBar.hamburgerButton).should("not.be.visible");
});

it("nav items should appear when hamburger is clicked from mobile mode", () => {
  cy.viewport("iphone-6");

  cy.get(selectors.navBar.hamburgerButton).should("be.visible");

  cy.get(selectors.navBar.servicesLink).should("not.be.visible");
  cy.get(selectors.navBar.projectsLink).should("not.be.visible");
  cy.get(selectors.navBar.testimonialsLink).should("not.be.visible");
  cy.get(selectors.navBar.contactsLink).should("not.be.visible");

  // after expanding hamburger - nav items are shown
  cy.get(selectors.navBar.hamburgerButton).click();
  cy.get(selectors.navBar.servicesLink).should("be.visible");
  cy.get(selectors.navBar.projectsLink).should("be.visible");
  cy.get(selectors.navBar.testimonialsLink).should("be.visible");
  cy.get(selectors.navBar.contactsLink).should("be.visible");

  cy.get(selectors.ourProjectsButton).should("contain", "Our projects");
});
