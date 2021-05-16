// https://docs.cypress.io/api/introduction/api.html


describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/meals")
  })

  it("Tests form output", () => {
    cy.get("#recipe-eggs").should("be.visible").type(3)
    cy.get("#recipe-pasta").should("be.visible").type(1040)
    cy.get("#recipe-butter").should("be.visible").type(1010)
    cy.get("#recipe-milk").should("be.visible").type(405)
    cy.get("#recipe-oil").should("be.visible").type(300)
    cy.get("#recipe-bacon").should("be.visible").type(410)

    cy.get("button[type='submit']").should("be.visible").click()

    cy.contains(".recipe-result", 2).should("be.visible")
  })

  it("Confirms submitable form", () => {
    cy.get("form").contains("form", "Calculate").submit();
  })
})
