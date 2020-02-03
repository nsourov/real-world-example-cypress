describe("Authentication:Register", () => {
  it("should visit real world sign up page", () => {
    cy.visit("#/register?_k=rbzehm");
  });

  it("should type userName", () => {
    cy.get(":nth-child(1) > .form-control")
      .type(Cypress.env("username"))
      .should("have.value", Cypress.env("username"));
  });

  it("should type email", () => {
    cy.get(":nth-child(2) > .form-control")
      .type(Cypress.env("email"))
      .should("have.value", Cypress.env("email"));
  });

  it("should type password", () => {
    cy.get(":nth-child(3) > .form-control")
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
  });

  it("should click on signup button", () => {
    cy.get(".btn").click();
  });

  it("should login into dashboard", () => {
    cy.url().should("contain", "/");
  });
});
