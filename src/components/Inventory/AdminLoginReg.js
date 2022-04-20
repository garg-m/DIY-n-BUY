import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
import watch from '../../images/watch.jpeg'
import { useState } from 'react'
//import UserLogin from './UserLogin'// to be changed
//import Registration from './Registration'// to be changed
import AdminLogin from './AdminLogin'
import AdminReg from './AdminReg'
const TabPanel=(props)=>{
    const {children, value, index}=props
    return (
        <div role='tabpanel' hidden={value!==index}>
            {
                value ===index&&(<Box>{children}</Box>)
                    
                
            }

        </div>
    )
}

const AdminLoginReg = () => {
    const [value, setValue]=useState(0)
    const handleChange=(event, newValue)=>{
        setValue(newValue)
    }
  return <>
  <Grid container sx={{height:'110vh'}}>
      <Grid item lg={7} sm={5} sx={{
          backgroundImage:`url(${watch})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center',
          display:{xs:'none', sm:'block'}
      }}>

      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{width:'100%', height:'100%'}}>
              <Box>
                  <Box sx={{borderBottom:1, borderColor:'divider'}}>
                      <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                          <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                          <Tab label='Registration'sx={{textTransform:'none', fontWeight:'bold'}} ></Tab>


                          
                      </Tabs>
                      <TabPanel value={value} index={0}>
                          <AdminLogin /> 
                      </TabPanel>
                      <TabPanel value={value} index={1}><AdminReg /></TabPanel>

                  </Box>
              </Box>

          </Card>

      </Grid>

  </Grid>
  
  </>;
};

export default AdminLoginReg;