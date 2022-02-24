import React, { useState } from 'react';
import Select from 'react-select';
import './style.css'

function ShopByModel() {
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

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  return (
    <div className="App">

      <Select
        placeholder="Select Part"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />

      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
      </div>}
    </div>
  );
}

export default ShopByModel;