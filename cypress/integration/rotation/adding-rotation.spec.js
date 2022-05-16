describe('rotation: testing adding item to rotation', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('list receives an item after selecting a flight ', () => {
    cy.get('.flights-list > li .btn')
      .first()
      .click()
      .then(() => {
        cy.get('.rotation-list > li').its('length').should('be.equal', 1);
      });
  });
});
