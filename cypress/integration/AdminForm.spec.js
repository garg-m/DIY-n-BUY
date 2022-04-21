describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/admin/inventory/tablecaseinv')
    })
    it("Should fill out the form and submit",()=>{
       // cy.contains('Add Parts!').click()
         cy.get('#shape').type("circle")
        cy.get('#width').type("10")
        cy.get('#dialsize').type("10")
        cy.get('#material').type("steel")
        cy.get('#finish').type("smooth")
         cy.get('#movements').type("movements")
         cy.get('#color').type("orange")
         cy.get('#addpart').submit()
         cy.url()
         .should('be.equal', 'http://localhost:3000/admin/inventory/successpage')

    })
})