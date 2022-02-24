import React, {useMemo} from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, groupedColumns} from './columnsShopByParts';
import './tableShopByParts.css'
import { style, width } from "@mui/system";
export const PaginationTable=()=>{
    const columns=useMemo(()=> groupedColumns, [])
    const data=useMemo(()=> MOCK_DATA, [])
   const tableInstance= useTable({
        columns,
        data
    },useSortBy, usePagination)
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
                            <tr {...row.getRowProps()}>
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
        </>
    )
}