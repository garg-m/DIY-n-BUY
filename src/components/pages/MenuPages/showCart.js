import React from "react";
const ShowCart=()=>{
    return(
        Object.keys(localStorage).map(k=>localStorage.getItem(k))
    )

}
export default ShowCart;