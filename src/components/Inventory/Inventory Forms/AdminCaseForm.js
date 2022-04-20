import React from 'react'
import { useState } from 'react'

const AdminCaseForm = () => {

    const [shape, setShape]=useState('')
    const [width, setWidth]=useState(0)
    const[dialsize,setDialsize]=useState(0)
    const[material, setMaterial]=useState('')
    const[finish,setFinish]=useState('')
    const[movements,setMovements]=useState('')
    const[color, setColor]=useState('')
    const handleSubmit=(e)=>{
            e.preventDefault()
            //this.props.history.push('/admin/inventory/successpage')
            const Case={shape,width,dialsize,material,finish,movements,color}
            console.log(Case)
            fetch('http://localhost:3001/create/cases',{
                method:'POST',
                mode:'cors',
                headers: {"Content-Type":"application/json charset=UTF-8"},
                body: JSON.stringify(Case)
            }).then((response) => {
                if(response.redirected){
                    window.location.href = "/admin/inventory/successpage";
                }
            })
    }
  return (
      <div>
          <h2 align="center">Welcome Admin!!!</h2>
          <h3 align="center">Fill the form to add a new case!!!</h3>
          <form align="center" onSubmit={handleSubmit}>
              <div >
              <label>Shape</label>
        <input
        type="text"
        required
        value={shape}
        onChange={(e)=> setShape(e.target.value)}
        />
              </div>
              <div>
              <label>Width</label>
        <input
        type="number"
        required
        value={width}
        onChange={(e)=>setWidth(e.target.value)}
       
        />
              </div>
        <div>
        <label>DialSize</label>
        <input
        type="number"
        required
        value={dialsize}
        onChange={(e)=>setDialsize(e.target.value)}
       
        />
        </div>
       
        <div>
        <label>Material</label>
        <input
        type="text"
        required
        value={material}
        onChange={(e)=>setMaterial(e.target.value)}
       
        />
        </div>
        <div>
        <label>Finish</label>
        <input
        type="text"
        required
        value={finish}
        onChange={(e)=>setFinish(e.target.value)}
       
        /> 
        </div>
        <div>
        <label>Movement</label>
        <input
        type="text"
        required
        value={movements}
        onChange={(e)=>setMovements(e.target.value)}
       
        />
        </div>
        <div>
        <label>Color</label>
        <input
        type="text"
        required
        value={color}
        onChange={(e)=>setColor(e.target.value)}
       
        />
        </div>
       
        <div>
        <button type='submit'>Add Part</button>
        </div>
        
        


    </form>
    
 
      </div>
    
  )
}

export default AdminCaseForm