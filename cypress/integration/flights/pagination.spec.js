describe('flight: testing pagination', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('check if renders the correct state for button', function () {
    cy.get(
      '.flights-container > .container__content > .pagination .prev'
    ).should('be.disabled');

    cy.get('.flights-container > .container__content > .pagination .next')
      .should('not.be.disabled')
      .click();

    cy.get(
      '.flights-container > .container__content > .pagination .prev'
    ).should('not.be.disabled');
  });

  it('check if list is changing', function () {
    cy.get('[data-testid="flight-AS1001"]').should('not.exist');
    cy.get('[data-testid="flight-AS1116"]').should('exist');

    cy.get('.flights-container > .container__content > .pagination .prev')
      .should('not.be.disabled')
      .click();

    cy.get('[data-testid="flight-AS1001"]').should('exist');
    cy.get('[data-testid="flight-AS1116"]').should('not.exist');
  });
});
