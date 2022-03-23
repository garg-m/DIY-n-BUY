import React, {useState} from 'react'
import Select from 'react-select'
import { PaginationTable } from './PaginationTable';


const NewProducts = () => {
  
    const data = [
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
    ];

    const [selectedValue, setSelectedValue]=useState({
      value: 12,
      label: "Gaskets"
    });
  
   
  
    return <>
 
  
    <Select
    value={selectedValue}
    options={data} />
    
    if ({selectedValue==2}){
        <PaginationTable />
      }

    
  
  
  
  </>;
};

export default NewProducts;
