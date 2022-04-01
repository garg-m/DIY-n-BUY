import React, { Component } from "react";
import { render } from '@testing-library/react';
import { useState } from "react";
import Select from 'react-select';
import { RowSelection } from "../../partComponents/RowSelection";
import { TableMovements } from "../../partComponents/TableMovements";
import { TableCase } from "../../partComponents/TableCase";
import { TableCrystal } from "../../partComponents/TableCrystal"
import { TableCrown } from "../../partComponents/TableCrown";
import { TableBezelRing } from "../../partComponents/TableBezelRing";
import { TableBezelInsert } from "../../partComponents/TableBezelInsert";
import { TableChapterRing } from "../../partComponents/TableChapterRing";
import { TableDial } from "../../partComponents/TableDial";
import { TableStrap } from "../../partComponents/TableStrap";
import { TableHand } from "../../partComponents/TableHand";
import { VisualizerSegment } from "../../Visualizer/VisualizerSegment";




export default class ShopByModel extends Component {



  constructor() {
    super()
    this.data = [
      {
        value: 1,
        label: "Case"
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
        label: "Crystal"
      },
      {
        value: 5,
        label: "Crown"
      },
      {
        value: 6,
        label: "BezelRing"
      },
      {
        value: 7,
        label: "BezelInsert"
      },
      {
        value: 8,
        label: "ChapterRing"
      },
      {
        value: 9,
        label: "Dial"
      },
      {
        value: 10,
        label: "Strap"
      },
      {
        value: 11,
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
  handleChange = function (obj) { this.setState({ selectedValue: obj });}
  render() {
    if (this.state.selectedValue.value == 2) {
      return (

        <div>
          <h1>Hello World</h1>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <TableCase />
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

          <TableCase />
          <VisualizerSegment />
        </div>
      )
    }
    else if (this.state.selectedValue.value == 4) {
      return (

        <div>
          <h1>Hello World</h1>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <TableCrystal />
        </div>
      )
    }
    else if (this.state.selectedValue.value == 5) {
      return (

        <div>
          <h1>Hello World</h1>
          <Select
            options={this.data}
            value={this.state.selectedValue}
            onChange={this.handleChange}


          />
          <TableCrown />
        </div>
      )
    }
  }
}