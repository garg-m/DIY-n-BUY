import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
//import MOCK_DATA_CASE from '../mockData/MOCK_DATA_CASE.json';
import MOCK_DATA_HAND from '../../mockData/MOCK_DATA_HAND.json'
//import { groupedColumnsCase } from './columnsCase';
import { groupedColumnsHand } from "../../partComponents/columnsHand";
//import './tableShopByParts.css'
import { style, width } from "@mui/system";
import { Link, NavLink } from 'react-router-dom';
import reactDom from "react-dom";
//import { VisualizerSegment } from "../Visualizer/VisualizerSegment";
import "./TableInventory.css"
import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
