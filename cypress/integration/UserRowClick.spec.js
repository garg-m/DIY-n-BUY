describe("Submit", () => {
     beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    
    it("Should check if the content of local storage is the selected row ",()=>{
       
      expect(localStorage.getItem('selectedBezelRing')).to.not.equal(null)
        
    })
})