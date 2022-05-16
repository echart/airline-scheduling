describe('rotation: testing timeline rendering', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('render correctly markers', () => {
    cy.get('.timeline-marker > li').its('length').should('be.equal', 5);
    cy.get('.timeline-marker > li').contains('00:00').should('exist');
    cy.get('.timeline-marker > li').contains('06:00').should('exist');
    cy.get('.timeline-marker > li').contains('12:00').should('exist');
    cy.get('.timeline-marker > li').contains('18:00').should('exist');
    cy.get('.timeline-marker > li').contains('23:59').should('exist');
  });


  it('starts with no flight on rotation', () => {
    cy.get('.timeline > li').should('not.exist');
  });

  it('timeline receives an item after selecting a flight ', () => {
    cy.get('.flights-list > li .btn')
      .first()
      .click()
      .then(() => {
        cy.get('.timeline > li.timeline__item--flight').its('length').should('be.equal', 1);
        cy.get('.timeline > li.timeline__item--turnaround').its('length').should('be.equal', 1);
      });
  });
});
