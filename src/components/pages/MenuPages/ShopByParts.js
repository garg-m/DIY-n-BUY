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
import "./ShopByParts.css"


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
  handleChange = function (obj) { 
    this.setState({ selectedValue: obj });
    
  }

  render() {
    if (this.state.selectedValue.value == 1) {
      return (

        <div>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          
          />
          <div id = "SideBySide">

          <div > 
          <TableCase />
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
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <div id = "SideBySide">

          <div > 
          <TableCase />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
        </div>
      )
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
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
          <div id = "SideBySide">

          <div > 
          <TableBezelRing />
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
          
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
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
          </div>
          <div >
          <VisualizerSegment />
          </div>

          </div>
        </div>
      )
    }
  }
}