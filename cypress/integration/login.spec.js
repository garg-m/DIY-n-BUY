

describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/LoginReg')
    })
    it("Should fill out id and password and submit",()=>{
        cy.get('#email').type("rayaprolu.kireeti@gmail.com")
        cy.get('#password').type("kireeti@128")
        cy.get('#login-form').submit()

    })
})