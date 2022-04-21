import React from 'react'
import { useState } from 'react'

const AdminBezelRingForm = () => {

    const [innerdiameter, setInnerdiameter]=useState(0)
    const [outerdiameter, setOuterdiameter]=useState(0)
    
    const[innerinsertdiameter, setInnerinsertdiameter]=useState(0)
    const[outerinsertdiameter,setOuterinsertdiameter]=useState(0)
    const[style,setStyle]=useState('')
    const[material,setMaterial]=useState('')
    const[finish,setFinish]=useState('')
    const[movements,setMovements]=useState('')
    const[color,setColor]=useState('')
    const[imagepath,setImagepath]=useState('')
    
    
    const[type, setType]=useState('')
    const handleSubmit=(e)=>{
            e.preventDefault()
            //this.props.history.push('/admin/inventory/successpage')
            const Crown={type,movements,material,finish,color}
            console.log(Crown)
            fetch('http://localhost:3001/create/bezelRings',{
                method:'POST',
                mode:'cors',
                headers: {"Content-Type":"application/json charset=UTF-8"},
                body: JSON.stringify(Crown)
            }).then((response) => {
                if(response){
                    window.location.href = "/admin/inventory/successpage";
                }
            })
    }
  return (
      <div>
          <h2 align="center">Welcome Admin!!!</h2>
          <h3 align="center">Fill the form to add a new bezelRings!!!</h3>
          <form align="center" onSubmit={handleSubmit}>
              <div >
              <label>Type</label>
        <input
        type="text"
        required
        value={type}
        onChange={(e)=> setType(e.target.value)}
        />
              </div>
              <div>
              <label>Movements</label>
        <input
        type="text"
        required
        value={movements}
        onChange={(e)=>setMovements(e.target.value)}
       
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
        <label>Color</label>
        <input
        type="text"
        required
        value={color}
        onChange={(e)=>setColor(e.target.value)}
       
        /> 

</div>
       
       <div>
       <label>Innerdiameter</label>
       <input
       type="text"
       required
       value={innerdiameter}
       onChange={(e)=>setInnerdiameter(e.target.value)}
      
       />

</div>
       
       <div>
       <label>Outerdiameter</label>
       <input
       type="text"
       required
       value={outerdiameter}
       onChange={(e)=>setOuterdiameter(e.target.value)}
      
       />

</div>
       
       <div>
       <label>Innerinsertdiameter</label>
       <input
       type="text"
       required
       value={innerinsertdiameter}
       onChange={(e)=>setInnerinsertdiameter(e.target.value)}
      
       />

</div>
       
       <div>
       <label>Outerinsertdiameter</label>
       <input
       type="text"
       required
       value={outerinsertdiameter}
       onChange={(e)=>setOuterinsertdiameter(e.target.value)}
      
       />
        </div>
        <div>
       <label>Style</label>
       <input
       type="text"
       required
       value={style}
       onChange={(e)=>setStyle(e.target.value)}
      
       />
        </div>

        <div>
       <label>Imagepath</label>
       <input
       type="text"
       required
       value={imagepath}
       onChange={(e)=>setImagepath(e.target.value)}
      
       />
        </div>
        
       
        <div>
        <button type='submit'>Add Part</button>
        </div>
        
        


    </form>
    
 
      </div>
    
  )
}

export default AdminBezelRingForm