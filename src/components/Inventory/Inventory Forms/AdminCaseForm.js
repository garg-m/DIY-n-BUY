import React from 'react'

const AdminCaseForm = () => {
  return (
      <div>
          <h2 align="center">Welcome Admin!!!</h2>
          <h3 align="center">Fill the form to add a new case!!!</h3>
          <form align="center">
              <div >
              <label>Shape</label>
        <input
        type="text"
        required
        />
              </div>
              <div>
              <label>Width</label>
        <input
        type="number"
        required
       
        />
              </div>
        <div>
        <label>DialSize</label>
        <input
        type="number"
        required
       
        />
        </div>
       
        <div>
        <label>Material</label>
        <input
        type="text"
        required
       
        />
        </div>
        <div>
        <label>Finish</label>
        <input
        type="text"
        required
       
        /> 
        </div>
        <div>
        <label>Movement</label>
        <input
        type="text"
        required
       
        />
        </div>
        <div>
        <label>Color</label>
        <input
        type="text"
        required
       
        />
        </div>
       
        <div>
        <button>Add Part</button>
        </div>
        
        


    </form>
      </div>
    
  )
}

export default AdminCaseForm