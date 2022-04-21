import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
//import MOCK_DATA_CASE from '../mockData/MOCK_DATA_CASE.json';
import MOCK_DATA_DIAL from '../../mockData/MOCK_DATA_DIAL.json'
//import { groupedColumnsCase } from './columnsCase';
import { groupedColumnsDial } from "../../partComponents/columnsDial";
//import './tableShopByParts.css'
import { style, width } from "@mui/system";
import { Link, NavLink } from 'react-router-dom';
import reactDom from "react-dom";
//import { VisualizerSegment } from "../Visualizer/VisualizerSegment";
import "./TableInventory.css"
import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
export const TableDialInventory = () => {
    // xyz

    const [tableData, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/getAll/crowns/', {
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
    const data = useMemo(() => MOCK_DATA_CROWN, [])

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
