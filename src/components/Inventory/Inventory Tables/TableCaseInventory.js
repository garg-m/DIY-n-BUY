import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
//import MOCK_DATA_CASE from '../mockData/MOCK_DATA_CASE.json';
import MOCK_DATA_CASE from '../../mockData/MOCK_DATA_CASE.json'
//import { groupedColumnsCase } from './columnsCase';
import { groupedColumnsCase } from "../../partComponents/columnsCase";
//import './tableShopByParts.css'
import { style, width } from "@mui/system";
import { Link, NavLink } from 'react-router-dom';
import reactDom from "react-dom";
//import { VisualizerSegment } from "../Visualizer/VisualizerSegment";
import "./TableInventory.css"
import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
export const TableCaseInventory = () => {

    const [tableData, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/getAll/cases/', {
            method: "GET",
            mode: 'cors',
        })
            .then((response) => response.text()
                .then(jsonContents => {
                    console.log(JSON.parse(jsonContents))
                    setData(JSON.parse(jsonContents))
                })
                .catch((error) => {
                    console.error(error);
                }));

    }, []);

    const columns = useMemo(() => groupedColumnsCase, [])
    const data = useMemo(() => MOCK_DATA_CASE, [])

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy, usePagination, useRowSelect)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        prepareRow,
    } = tableInstance

    const { pageIndex } = state
    const CircularJSON = require('circular-json')

    return (
        <div class="wrapper">
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps)}>{column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                            </span>
                                        </th>
                                    ))
                                }

                            </tr>
                        ))


                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} onClick={() => {
                                    //VisualizerSegment.changeImgSrc('case',row.original.imagepath)
                                    console.log(row.original.imagepath)
                                    localStorage.setItem('selectedCase', CircularJSON.stringify(row.original))
                                }}>
                                    {
                                        row.cells.map(cell => {
                                            return <td{...cell.getCellProps()}>
                                                {cell.render('Cell')}

                                            </td>

                                        })
                                    }

                                </tr>


                            )
                        })
                    }

                </tbody>

            </table>
            <div align="center" >
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Jump to: {' '}
                    <input type='number' defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                            style = { width: '50px' }
                        }}></input>
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            <div align="center">
               
            <Link to="/admin">
     <button type="button">
          Add Parts!
     </button>
 </Link>
               
            
            

            </div>
        </div>
    )
}