import { getAccordionDetailsUtilityClass } from "@mui/material";
import React from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import ShowCart from "./showCart";
const Cart=()=>{
    
    const handleClearCart=(e)=>{
        localStorage.clear()
        window.location.reload()
        
    }
    return<>
    <ShowCart />
    <div>
    <button onClick={handleClearCart} id="clear">Clear</button>
    </div>
    
    </>
}
export default Cart;