import React from 'react';
import NavBarAdmin from './NavBarAdmin';

import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const LayoutAdmin = () => {
  return <>
  <CssBaseline />
  <NavBarAdmin />
  <Outlet />
  </>;
};

export default LayoutAdmin;