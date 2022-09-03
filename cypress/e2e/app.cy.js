// https://docs.cypress.io/api/introduction/api.html

describe("Should Run the app", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains(".router-link-active", "Home");
  });
  it("list the shows by genre", () => {
    cy.visit("/");
    cy.get(".genre-name").its("length").should("be.gte", 1);
  });
  it("should do a search", () => {
    cy.visit("/");
    cy.get(".search-bar > input").type("test");
    cy.get("form").submit();
    cy.get(".search-result").should("exist");
  });
  it("should do a search then it should clear the search", () => {
    cy.visit("/");
    cy.get(".search-bar > input").type("test");
    cy.get("form").submit();
    cy.get(".search-result").should("exist");
    cy.get("#clear-icon").should("exist");
    cy.get("#clear-icon").click();
    cy.get("#search-result").should("not.exist");
  });
  it("should go to detail page", () => {
    cy.visit("/");
    cy.get(".show").first().click();
    cy.location("pathname").should("not.eq", "/");
  });
  it("should render detail page", () => {
    cy.visit("/160");
    cy.get(".show-card").should("exist");
    cy.get(".show-card-info").should("exist");
    cy.get(".show-card-cast > h1").should("contain", "Cast");
    cy.get(".show-card-seasons > h1").should("contain", "Seasons");
  });
});
