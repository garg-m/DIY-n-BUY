import React, {useMemo} from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import MOCK_DATA_CASE from './MOCK_DATA_CASE.json';
import {columnCase, groupedColumnsCase} from './columnsCase';
import MetaTags from 'react-meta-tags';

import './tableShopByParts.css'
import { style, width } from "@mui/system";
export const TableCase=()=>{
    const getMoviesFromApi = () => {
        return fetch('http://localhost:3001/getAll/cases/',{
            method: "GET",
            mode: 'cors',
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }})
          .then((response) => response.json())
          .then((json) => {
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      };
    console.log(getMoviesFromApi())

    const columns=useMemo(()=> groupedColumnsCase, [])
    const data=useMemo(()=> MOCK_DATA_CASE , [])
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
        <div class="wrapper">
        <MetaTags>
        <meta http-equiv="Content-Security-Policy: connect-src http://localhost:*/"></meta>
        </MetaTags>

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
                            <tr {...row.getRowProps()} onClick={()=>{console.log('row click', row);
                            localStorage.setItem('row click',CircularJSON.stringify(row))}}>
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
            <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={()=>gotoPage(pageCount-1)}disabled ={!canNextPage}>{'>>'}</button>
        </div>
        </div>
    )
}