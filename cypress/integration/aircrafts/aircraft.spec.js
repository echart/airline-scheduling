describe('aircraft: testing render', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('User can load and see the scheduler component', () => {
    cy.get('.scheduler').should('be.visible');
  });

  it('user can see the unique aircraft loaded from the API', () => {
    cy.get('.aircraft-list>li').its('length').should('eq', 1);
  });
});
