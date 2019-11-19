/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const pokemonListItem = ".qa-pokemon-list-item";
  it("Should render 20 pokemon list", () => {
    cy.get(pokemonListItem).should("have.length", 20);
  });
  it("Should be able to choose one of pokemon", () => {
    cy.get(pokemonListItem)
      .first()
      .then($div => {
        const pokemonName = $div.text();
        $div.click();

        cy.location("pathname").should("include", pokemonName);
      });
  });
});
