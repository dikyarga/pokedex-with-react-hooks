/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const pokemonListItem = ".qa-pokemon-list-item";
  const backButton = ".qa-back-to-list";
  it("Should render 20 pokemon list", () => {
    cy.get(pokemonListItem).should("have.length", 20);
  });
  it("Should be able to choose a pokemon", () => {
    cy.get(pokemonListItem)
      .first()
      .then(el => {
        const pokemonName = el.text();
        el.click();

        cy.location("pathname").should("include", pokemonName);
        cy.wait(1000);
        cy.get(".qa-select").click();
        cy.location("pathname").should("include", pokemonName + "/vs");
      });
  });

  it("Should be able to back after choose a pokemon", () => {
    cy.get(pokemonListItem)
      .first()
      .then(el => {
        el.click();
        cy.wait(1000);
        cy.get(".qa-back-to-list").click();
        cy.location("pathname").should("include", "/");
      });
  });
  it("Should be able to a battle", () => {
    cy.get(pokemonListItem)
      .first()
      .then(el => {
        const firstPokemon = el.text();
        el.click();

        cy.location("pathname").should("include", firstPokemon);
        cy.wait(1000);
        cy.get(".qa-select").click();
        cy.location("pathname").should("include", firstPokemon + "/vs");

        cy.get(pokemonListItem)
          .last()
          .then(el => {
            const lastPokemon = el.text();
            el.click();

            cy.location("pathname").should("include", lastPokemon);
            cy.wait(1000);
            cy.get(".qa-select").click();
            cy.location("pathname").should(
              "include",
              `${firstPokemon}/vs/${lastPokemon}/battle`
            );
          });
      });
  });
});
