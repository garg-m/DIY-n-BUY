import React, { Component } from "react";
import { render } from '@testing-library/react';
import { useState } from "react";
import Select from 'react-select';
import { TableCase } from "../../partComponents/TableCase";
import { TableCrown } from "../../partComponents/TableCrown";
import { TableBezelRing } from "../../partComponents/TableBezelRing";
import { TableBezelInsert } from "../../partComponents/TableBezelInsert";
import { TableChapterRing } from "../../partComponents/TableChapterRing";
import { TableDial } from "../../partComponents/TableDial";
import { TableStrap } from "../../partComponents/TableStrap";
import { TableHand } from "../../partComponents/TableHand";
import { VisualizerSegment } from "../../Visualizer/VisualizerSegment";
<<<<<<< HEAD
=======
import "./ShopByParts.css"
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a


export default class ShopByParts extends Component {



  constructor() {
    super()
    this.data = [
      {
        value: 1,
        label: "Case"
      },
      {
        value: 2,
        label: "Crown"
      },
      {
        value: 3,
        label: "BezelRing"
      },
      {
        value: 4,
        label: "BezelInsert"
      },
      {
        value: 5,
        label: "ChapterRing"
      },
      {
        value: 6,
        label: "Dial"
      },
      {
        value: 7,
        label: "Strap"
      },
      {
        value: 8,
        label: "Hand"
      }
    ]

    this.state = {

      selectedValue: {
        value: 1,
        label: "Case"
      }

    }
    this.handleChange = this.handleChange.bind(this)


  }
  handleChange = function (obj) { this.setState({ selectedValue: obj }); }
  render() {
    if (this.state.selectedValue.value == 1) {
      return (

        <div>
<<<<<<< HEAD
=======
          <h1>Hello World</h1>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          
          />
          <div id = "SideBySide">

          <div > 
          <RowSelection />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
          

        </div>
      )

    }
    else if (this.state.selectedValue.value == 1) {
      return (

        <div>
          <h1>Hello World</h1>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <div id = "SideBySide">

          <div > 
          <TableCase />
<<<<<<< HEAD
          <VisualizerSegment/>
          
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )

<<<<<<< HEAD
=======
        <div>
          <h1>Hello World</h1>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <div id = "SideBySide">

          <div > 
          <TableCrystal />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
        </div>
      )
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
    }
    else if (this.state.selectedValue.value == 2) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}
          />
          <div id = "SideBySide">

          <div > 
          <TableCrown />
<<<<<<< HEAD
          <VisualizerSegment/>
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 3) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
<<<<<<< HEAD
          <TableBezelRing/>
          <VisualizerSegment/>
=======
          <div id = "SideBySide">

          <div > 
          <TableBezelRing />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 4) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />

          <div id = "SideBySide">

          <div > 
          <TableBezelInsert />
<<<<<<< HEAD
          <VisualizerSegment/>
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
          
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 5) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />

          <div id = "SideBySide">

          <div > 
          <TableChapterRing />
<<<<<<< HEAD
          <VisualizerSegment/>
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 6) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <div id = "SideBySide">

          <div > 
          <TableDial />
<<<<<<< HEAD
          <VisualizerSegment/>
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 7) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <div id = "SideBySide">

          <div > 
          <TableStrap />
<<<<<<< HEAD
          <VisualizerSegment/>
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
        </div>
      )
    }
    else if (this.state.selectedValue.value == 8) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}
          />

          <div id = "SideBySide">

          <div > 
          <TableHand />
<<<<<<< HEAD
          <VisualizerSegment/>
        </div>
      )
    }
=======
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
        </div>
      )
    }

    else {
      return (<div>
                  <h1>Hello World</h1>

        <Select
          options={this.data}
          value={this.state.selectedValue}
          onChange={this.handleChange}


        />
        <div id = "SideBySide">

          <div > 
          <TableMovements />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
      </div>)
    }






>>>>>>> 30776657db5959ff7eac03bd14e7d4214f46471a
  }
}