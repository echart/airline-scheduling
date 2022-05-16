import messages from '../../../src/config/messages';
import { formatDate } from '../../../src/utils/format';

const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  return tomorrow;
};

describe('rotation: testing render', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('starts with no flight on rotation', () => {
    cy.get('.rotation-list > li').should('not.exist');

    cy.get('.rotation-container')
      .contains(messages.rotation.empty)
      .should('exist');
  });

  it('date is always tomorrow and datepicker is disabled', () => {
    const tomorrow = formatDate(getTomorrow());
    cy.get('.datepicker').invoke('prop', 'value').should('be.equal', tomorrow);
    cy.get('.datepicker').should('be.disabled');
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
