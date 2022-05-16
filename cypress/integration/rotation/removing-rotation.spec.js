describe('rotation: testing removing item from rotation', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('list removes an item after selecting a flight ', () => {
    cy.get('.flights-list > li .btn')
      .first()
      .click()
      .then(() => {
        cy.get('.rotation-list > li').its('length').should('be.equal', 1);
        cy.get('.rotation-list > li')
          .find('.btn')
          .click()
          .then(() => {
            cy.get('.rotation-list > li').should('not.exist');
          });
      });
  });
});
