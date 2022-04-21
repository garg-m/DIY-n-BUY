describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/admin')
    })
    it("Should fill out id and password and submit",()=>{
        cy.contains('Login').click()
        cy.get('#email').type("rayaprolu.kireeti@gmail.com")
        cy.get('#password').type("kireeti@128")
        cy.get('#login-form').submit()
        cy.url()
        .should('be.equal', 'http://localhost:3000/admin/inventory')

    })
})