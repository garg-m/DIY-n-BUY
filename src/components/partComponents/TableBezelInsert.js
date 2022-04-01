import React, {useMemo, useState,useEffect} from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import MOCK_DATA_BEZEL_INSERT from '../mockData/MOCK_DATA_BEZEL_INSERT.json';
import {columnCase, groupedColumnsBezelInsert} from './columnsBezelInsert';
import './tableShopByParts.css'
import { style, width } from "@mui/system";
import { Link } from 'react-router-dom';
export const TableBezelInsert=()=>{

    const [tableData, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/getAll/bezelInserts/',{
            method: "GET",
            mode: 'cors',
            })
          .then((response) => response.text()
          .then(jsonContents=>{
            console.log(JSON.parse(jsonContents))
            setData(JSON.parse(jsonContents))
            })
          .catch((error) => {
            console.error(error);
          }));
      }, []);

    const columns=useMemo(()=> groupedColumnsBezelInsert, [])
    const data=useMemo(()=> tableData, [])

    

    

   const tableInstance= useTable({
        columns,
        data
    },useSortBy, usePagination, useRowSelect)
    const{
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
    }=tableInstance
    const {pageIndex}=state
    const CircularJSON = require('circular-json')
    return(
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                    headerGroup.headers.map(column => (
                                        <th {... column.getHeaderProps(column.getSortByToggleProps)}>{column.render('Header')}
                                        <span>
                                            {column.isSorted? (column.isSortedDesc ? ' 🔽' : ' 🔼'):''}
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
                        return(
                            <tr {...row.getRowProps()} onClick={()=>{
                            localStorage.setItem('row click BezelInsert',CircularJSON.stringify(row.original))}}>
                                {
                                    row.cells.map(cell =>{
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
        <div align="center">
            <span>
                Page{' '}
                <strong>
                    {pageIndex+1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Jump to: {' '}
                <input type='number' defaultValue={pageIndex+1}
                onChange={e=>{
                    const pageNumber= e.target.value ? Number(e.target.value)-1 :0
                    gotoPage(pageNumber)
                    style={width:'50px'}
                }}></input>
            </span>
            <button onClick={()=>gotoPage(0)}disabled ={!canPreviousPage}>{'<<'}</button>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <Link to="/Cart">
            <button onClick={()=>localStorage.getItem('row click BezelInsert')} >Cart</button>
            </Link>
            <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={()=>gotoPage(pageCount-1)}disabled ={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}