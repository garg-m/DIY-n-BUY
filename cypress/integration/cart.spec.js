

  describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Cart')
    })
    
    it("Should check if the content of local storage is null ",()=>{
        cy.get('#clear').click()
       expect(localStorage.getItem('token')).to.eq(null)
        
    })
})