import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const pages=['Home','Categories','Products','Aboutus','Contactus']

const DrawerCon = () => {
    const [Opendrawer,setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
  <Drawer anchor='right' PaperProps={{sx:{backgroundColor:'#34bf49',width:'405px',marginTop:8}}}  open={Opendrawer} onClose={()=>setOpenDrawer(false)} Divider>
      <List>
        {
            pages.map((listtxt,index)=>(
                <ListItemButton  onClick={()=>setOpenDrawer(!Opendrawer)} key={index} divider>
                <ListItemIcon>
                    <ListItemText sx={{color:'white', marginTop:2,justifyContent:'flex-end'}}>{listtxt}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))
            
        }
        
      </List>
  </Drawer>
   <IconButton edge="end" sx={{color:'green',marginLeft:'auto'}} onClick={()=>setOpenDrawer(!Opendrawer)}>
   <MenuIcon/>

</IconButton>
</React.Fragment>
    )
}

export default DrawerCon