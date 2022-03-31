describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Dashboard')
    })
    it("Should redirect to Dashboard page",()=>{
        cy.get('#Logout').click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/')
        
    })
})