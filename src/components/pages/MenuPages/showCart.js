import React from "react";
const ShowCart=()=>{
    return(
        <ul>
        {Object.keys(localStorage).map((k) => {
          return <p>{localStorage.getItem(k)}</p>
        })}
      </ul>
       
    )
}
export default ShowCart;