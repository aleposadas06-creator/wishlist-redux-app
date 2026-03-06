/// <reference types="cypress" />

describe('Wishlist App', () => {

  it('carga la página principal', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Mi Wishlist');
  });

  it('permite agregar un item', () => {
    cy.visit('http://localhost:4200');

    cy.get('input').first().type('Viajar a Japón');
    cy.get('input').last().type('Visitar Tokio');

    cy.contains('Agregar').click();

    cy.contains('Viajar a Japón');
  });

  it('permite votar un item', () => {
    cy.visit('http://localhost:4200');

    cy.get('input').first().type('Viajar a Italia');
    cy.get('input').last().type('Roma');

    cy.contains('Agregar').click();

    cy.contains('👍').click();
  });

});