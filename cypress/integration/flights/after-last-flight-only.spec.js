describe('flight: testing rule - after last flight only', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('after selecting a flight check if only flights 20 minutes later ON THE SAME AIRPORT after the last one are available', function () {
    cy.get('.flights-list > li').as('flightList');
    cy.get('@flightList').get('[data-testid=flight-AS1026]').as('theFlight');

    cy.get('@theFlight')
      .find('.arrival .station__time')
      .invoke('data', 'time')
      .as('time');

    cy.get('@theFlight')
      .find('.arrival .station__name')
      .invoke('text')
      .as('airport');

    cy.get('@theFlight').click();

    cy.get('.flights-list > li')
      .find('.btn')
      .each(($el) => {
        const station = $el.find('.departure .station__name').text();

        if (this.airport === station) {
          const departure = $el.find('.departure .station__time').data('time');
          const turnaround_time = 1200;
          const isAfter = this.time + turnaround_time <= departure;

          if (isAfter) cy.wrap($el).should('not.be.disabled');
          else cy.wrap($el).should('be.disabled');
        }
      });
  });
});
