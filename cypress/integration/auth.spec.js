describe('Authentication:Login', function () {
  it('Should visit DevConnector login page', function () {
    cy.visit('/#/login?_k=ejfd6m');
  })
  it('Should type email', function () {
    cy.get('input[type=email]').type(Cypress.env('email')).should('have.value', Cypress.env('email'));
  })
  it('Should type password', function () {
    cy.get('input[type=password]').type(Cypress.env('password')).should('have.value', Cypress.env('password'));
  })
  it('Should click on login button', function () {
    cy.get('.btn').click();
  })
  it('Should login into dashboard', function () {
    cy.url().should('contain', '/');
  })
})
