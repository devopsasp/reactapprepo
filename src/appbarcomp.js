import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MyButton from './mybutton'
import React from "react"
import {red,green,teal} from '@mui/material/colors'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import MyImage from './myimage'
import { Typography } from '@mui/material'
import MyIconButton from './iconcontrol'
import List from '@mui/material/List'
import { ListItemText,ListItemIcon,ListItemButton } from '@mui/material'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ForumIcon from '@mui/icons-material/Forum';
import { ListItemAvatar } from '@mui/material'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import { AvatarGroup } from '@mui/material'
import pic1 from './images/apple.jpg'
import pic2 from './images/berry.jpg'
import pic3 from './images/peach.jpg'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {Link,Outlet} from 'react-router-dom'

const apptheme=createTheme({
    palette:{
        primary:{
              main:teal[500]
        },
        text:{
           primary:red[500]
        }
    }
})

function MyAppBar()
{


    return <div>
        <ThemeProvider theme={apptheme}>
                 <AppBar>
                    <Toolbar >
                        
                   <MyIconButton/>   
                   <Typography>
                   <Link to="/about"><Button variant="contained">About</Button></Link> 
                   </Typography> 
                   <Typography>
                   <Link to="/contact" ><Button variant="contained">Contact</Button></Link> 
                   </Typography> 
                        <Typography sx={{flexGrow:1,color:'#ffcc99'}}>News App</Typography>
                       
                        <MyImage />
                    </Toolbar>
                 </AppBar>
                 <div style={{position:'relative',top:80,left:200}}>
                      <Card sx={{width:275}}>
                          <CardContent>
                              <Typography variant="h5">
                                     Chat Messages for the day
                                        <List>
                          <ListItemText>
                 Message from Mr Rodney
                                                         
                                  </ListItemText>
                <ListItemText>
                  Mails for Today
                                        </ListItemText>
                                                  <ListItemText>
                                                      Message from our Beloved HOC
                                                  </ListItemText>
                                    </List> 
                              </Typography>
                                       
                          </CardContent>
                          <CardActions>
                              <Button variant="contained">Go to Bay Area</Button>
                          </CardActions>
                      </Card>

                 </div>

                 <div style={{position:'relative',top:-140,left:600}}>
                     <Paper sx={{width:220}} variant="elevation" elevation={14}>
   <Typography>
    News for the day
   </Typography>
   <List>
       <ListItemText>
           Sensex breaches 19000
       </ListItemText>
        <ListItemText>
             Inflation at all time high
        </ListItemText>
        <ListItemText>
            Why people switching to JavaScript framework more often now
        </ListItemText>

   </List>
   </Paper>
    </div>

    <div style={{position:'relative',top:-60,left:600}}>
  <Outlet />
    </div>



                 </ThemeProvider>
                     <div style={{position:"relative",left:0,top:-460}}>
   <List sx={{width:100}}>
       <ListItemText>
           <Typography >
               Welcome to React App
           </Typography>
       </ListItemText>
       <ListItemAvatar>
           <AvatarGroup total={5}>
                  <MyImage pic={pic1}/>
                  <MyImage pic={pic2}/>
                  <MyImage pic={pic3}/>
           </AvatarGroup>
       </ListItemAvatar>
       <ListItemButton>
           <ListItemIcon>
               <LocalPostOfficeIcon/>
           </ListItemIcon>
       </ListItemButton>
       <ListItemButton>
           <ListItemIcon>
               <PermIdentityIcon />
           </ListItemIcon>
       </ListItemButton>
       <ListItemButton>
           <ListItemIcon>
               <ForumIcon />
           </ListItemIcon>
       </ListItemButton>
       <ListItemButton>
           <ListItemIcon>
               <SettingsSystemDaydreamIcon/>
           </ListItemIcon>
       </ListItemButton>

   </List>

    </div>
    
    </div>
}
export default MyAppBar