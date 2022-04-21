import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
//import MOCK_DATA_CASE from '../mockData/MOCK_DATA_CASE.json';
import MOCK_DATA_Chapter_Ring from '../../mockData/MOCK_DATA_CHAPTER_RING.json'
//import { groupedColumnsCase } from './columnsCase';
import { groupedColumnsChapterRing } from "../../partComponents/columnsChapterRing";
//import './tableShopByParts.css'
import { style, width } from "@mui/system";
import { Link, NavLink } from 'react-router-dom';
import reactDom from "react-dom";
//import { VisualizerSegment } from "../Visualizer/VisualizerSegment";
import "./TableInventory.css"
import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'