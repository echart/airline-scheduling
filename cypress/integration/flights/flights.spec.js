describe('flight: testing render and behavior', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('render container correctly', () => {
    cy.get('.flights-container > h2').contains('Available Flights').should('exist');
  });

  it('load flight list correctly', () => {
    cy.get('.flights-list>li').its('length').should('be.equal', 10);
  });

  it('click a flight from the list and check if it was removed', () => {
    cy.get('.flights-list > li')
      .as('flightList')
      .get('@flightList')
      .first()
      .as('firstCard')
      .then(($el) => {
        const flightNumber = $el.find('.card__title.flight strong').text();
        cy.get('@firstCard').contains(flightNumber).should('exist');

        cy.get('@firstCard').click();
        cy.get('@firstCard').contains(flightNumber).should('not.exist');
      });
  });
});
