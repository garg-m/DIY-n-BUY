import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import { NavLink } from 'react-router-dom';

const NavBarAdmin = () => {
  return <>
  <Box sx={{flexGrow:1}}>
      <AppBar position='center' color='secondary'>
          <Toolbar>
              <Typography variant='h5' component="div" sx={{flexGrow:1}}>
              Diy-n-Buy Admin
              </Typography>
              <Button component={NavLink} to='/admin' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white', textTransform:'none'}}>Home Admin</Button>
              <Button component={NavLink} to='/admin/inventory' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none' }} >Inventory</Button>
              <Button component={NavLink} to='/admin/adminloginreg' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none' }} >Login</Button>
              
              

          </Toolbar>


      </AppBar>

  </Box>
  </>;
};

export default NavBarAdmin;