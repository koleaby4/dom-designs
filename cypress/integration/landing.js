it.only("content of landing page", () => {
  cy.visit("");
  cy.get("[data-test=services-link]").should("contain", "Services");
});
