describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/LoginReg')
    })
    it("Should fill out id and password and submit",()=>{
        cy.contains('Registration').click()
        cy.get('#name').type('kireeti')
        cy.get('#email').type("rayaprolu.kireeti@gmail.com")
        cy.get('#password').type("kireeti@128")
        cy.get('#password_confirmation').type("kireeti@128")
        cy.get("#tc").check()
        
        cy.get('#registration-form').submit()

    })
})