describe('flight: testing rule - all aircrafts should be on the ground at midnight', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('all aircrafts should be on the ground at midnight by adding disable to the ones that does not', function () {
    cy.get('.flights-list > li').each(($el) => {
      const arrival = $el.find('.departure .station__arrival').data('time');
      if (arrival > 86400)
        cy.wrap($el).should('be.disabled')
      else cy.wrap($el).should('not.be.disabled')
    });
  });
});
