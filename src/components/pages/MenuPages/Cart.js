import { getAccordionDetailsUtilityClass } from "@mui/material";
import React from "react";
import { TableCrystal } from "../../partComponents/TableCrystal";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
class Cart extends React.Component{
    
    render(){
        
        return(
            

            //localStorage.getItem('row click')
            Object.keys(localStorage).map(k => localStorage.getItem(k))
            
            
            
        )
    }

}
export default Cart;