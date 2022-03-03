import React, {Component} from "react";
import { render } from '@testing-library/react';
import { useState } from "react";
import Select from 'react-select';
import { RowSelection } from "../../RowSelection";
import { tableMovements } from "../../tableMovements";


  


export default class ShopByModel extends Component{
    
    
    
    constructor(){
        super()
         this.data = [
        {
          value: 1,
          label: "Cases"
        },
        {
          value: 2,
          label: "Case Back"
        },
        {
          value: 3,
          label: "Movements"
        },
        {
          value: 4,
          label: "Bezels"
        },
        {
          value: 5,
          label: "Bezel Inserts"
        },
        {
          value: 6,
          label: "Chapter Rings"
        },
        {
          value: 7,
          label: "Crowns"
        },
        {
          value: 8,
          label: "Hands"
        },
        {
          value: 9,
          label: "Dials"
        },
        {
          value: 10,
          label: "Straps/Bracelets"
        },
        {
          value: 11,
          label: "Tools"
        },
        {
          value: 12,
          label: "Gaskets"
        }
    ]
    
        this.state={
            
            selectedValue: {
                value: 12,
                label: "Gaskets"
              }
              
        }
        this.handleChange = this.handleChange.bind(this)
        
       
    }
   handleChange= function(obj) { this.setState({selectedValue: obj});}
    render(){
       
        
        if(this.state.selectedValue.value==12){
            return(
            
                <div>
                    <h1>Hello World</h1>
               <Select
               options={this.data}
               value={this.state.selectedValue}
               onChange={this.handleChange}
               
              
                />
                <RowSelection />
                </div>
            )

        }
        else{
            return(<div>
                <Select
               options={this.data}
               value={this.state.selectedValue}
               onChange={this.handleChange}
               
              
                />
                
                <tableMovements />
                </div>)
        }
       
        
        
        
        
       
    }
}