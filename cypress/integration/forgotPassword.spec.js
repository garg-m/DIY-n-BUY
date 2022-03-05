describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/LoginReg')
    })
    it("Should redirect to forgot password page",()=>{
        cy.contains('Forgot Password?').click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/reset')
        cy.go('back')
    })
})