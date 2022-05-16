describe('aircraft: testing occupation calc', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('occupation is zero before select any flight', () => {
    cy.get('.aircraft-list > li .btn')
      .first()
      .get('.aircraft__utilization')
      .invoke('text')
      .should('be.equal', '0.0%')
  });

  it('occupation is NOT zero after select any flight', () => {
    cy.get('.flights-list > li .btn')
      .first()
      .should('have.class', 'flight-card')
      .click()
      .then(() => {
        cy.get('.aircraft-list > li:first-of-type .btn')
          .should('have.class', 'aircraft--selected')
          .get('.aircraft__utilization')
          .invoke('text')
          .should('not.be.equal', '0.0%')
      });
  });
});
