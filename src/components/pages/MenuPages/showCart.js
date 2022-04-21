import React from "react";
const ShowCart=()=>{
  // const handleClick=(e)=>{
  //   localStorage.removeItem(e)
  // }
  
    return(
        <ul>
        {Object.keys(localStorage).map((k) => {
          return <div>
              <p>{localStorage.getItem(k)}</p>
              <button  onClick={()=>{localStorage.removeItem(k); window.location.reload();} }>Clear Item</button>
          </div> 
        })}
      </ul>
       
    )
}
export default ShowCart;