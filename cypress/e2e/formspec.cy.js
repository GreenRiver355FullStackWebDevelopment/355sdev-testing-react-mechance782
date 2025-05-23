describe('Restaurant Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('User can add Restaurant', () => {
    cy.get('[data-cy="input-name"]').type("Hops n Drops")

    cy.get('[data-cy="input-address"]').type("12335 678th ave E City, State")

    cy.get('[data-cy="input-phone"]').type("222-222-2222")

    cy.get('[data-cy="input-cuisine"]').type("American")

    cy.get('[data-cy="input-rating"]').type(4)

    cy.get('[data-cy="form-submit"]').submit()

    cy.get('[data-cy="5 Hops n Drops"]').within(() => {
      cy.contains('h2', "Hops n Drops");
      cy.contains('li', "12335 678th ave E City, State");
      cy.contains('li', "222-222-2222");
      cy.contains('li', "American");
      cy.contains('li', "4");
    })
    
  })
})