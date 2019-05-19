const selectors = {
  servicesLink: "[data-test=services-link]",
  projectsLink: "[data-test=projects-link]",
  testimonialsLink: "[data-test=testimonials-link]",
  contactsLink: "[data-test=contacts-link]",
  hamburgerButton: "[data-test=hamburger-button]",
  ourProjectsButton: "[data-test=our-projects-CTA]"
};

beforeEach(() => {
  cy.visit("");
});

it("nav items should be visible in desktop mode", () => {
  cy.get(selectors.servicesLink).should("contain", "Services");
  cy.get(selectors.projectsLink).should("contain", "Projects");
  cy.get(selectors.testimonialsLink).should("contain", "Testimonials");
  cy.get(selectors.contactsLink).should("contain", "Contacts");
  cy.get(selectors.ourProjectsButton).should("contain", "Our projects");
  cy.get(selectors.hamburgerButton).should("not.be.visible");
});

it("nav items should appear when hamburger is clicked from mobile mode", () => {
  cy.viewport("iphone-6");

  cy.get(selectors.hamburgerButton).should("be.visible");

  cy.get(selectors.servicesLink).should("not.be.visible");
  cy.get(selectors.projectsLink).should("not.be.visible");
  cy.get(selectors.testimonialsLink).should("not.be.visible");
  cy.get(selectors.contactsLink).should("not.be.visible");

  // after expanding hamburger - nav items are shown
  cy.get(selectors.hamburgerButton).click();
  cy.get(selectors.servicesLink).should("be.visible");
  cy.get(selectors.projectsLink).should("be.visible");
  cy.get(selectors.testimonialsLink).should("be.visible");
  cy.get(selectors.contactsLink).should("be.visible");

  cy.get(selectors.ourProjectsButton).should("contain", "Our projects");
});
