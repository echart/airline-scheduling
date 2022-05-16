describe('flight: testing rule - same airport only', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('after selecting a flight check if all flights that are still on the list and not from the same airport are marked as DISABLED', function () {
    cy.get('.flights-list > li').as('flightList').first().as('firstCard');

    cy.get('@firstCard').click();

    cy.get('.rotation-list__item .btn')
      .last()
      .find('.arrival .station__name')
      .invoke('text')
      .as('airport');

    cy.get('@flightList')
      .find('.btn')
      .each(($el) => {
        const departure = $el.find('.departure .station__name').text();
        const isSameAiport = this.airport === departure;
        if (isSameAiport)
          cy.wrap($el).should('not.be.disabled')
        else
          cy.wrap($el).should('be.disabled')
      });
  });
});
