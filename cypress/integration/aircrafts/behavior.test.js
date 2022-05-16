import messages from '../../../src/config/messages';

describe('aircraft: testing behavior', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('user can click on an aircraft on the list and see a empty list', () => {
    cy.get('.aircraft-list > li .btn')
      .last()
      .click()
      .should('have.class', 'aircraft--selected')
      .focused()
      .get('.aircraft__name')
      .invoke('text')
      .then((text) => {
        cy.get('.rotation-container > h2').contains(
          `Rotation for aircraft: ${text}`
        ).should('exist');
        cy.get('.rotation-container').contains(messages.rotation.empty).should('exist');
      });
  });
});
