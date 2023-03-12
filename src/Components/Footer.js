import { Divider, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { FooterContainer, FooterContent } from './style'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
const Footer = () => {
  return (
    <div>
      
<FooterContainer 
// sx={{ backgroundImage: `url('/Images/footer-back.png')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "30px",
//                   width: { xs: "100%" },
//                   height: "500px",
//                   // opacity:0.3,
//                   backdropFilter: "blur(5px)",
//                   }}
                  >
  <FooterContent paddingTop={13}>
    <Grid container color={'white'} justifyContent='center' spacing={3}>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Home</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >About</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography>Story</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Booking</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Reviews</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >TopFoods</Typography>
    </Grid>
    </Grid>
    </FooterContent>
    <Typography variant='h3'color='#34bf49'>CAFE360</Typography>
    {/* <Divider color={'white'} flexItem/> */}
    <Box justifyContent={'center'} display="flex" marginTop={8}>
<Grid container justifyContent="center" color={'wheat'} justifyItems={'center'}>
    <FacebookIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}} />
        <TwitterIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}}/>
        <WhatsAppIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}}/>
         <LinkedInIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}} />
         <FacebookIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}} />
        <TwitterIcon sx={{mr:4,color:'grey',width:'50px',height:'50px'}}/>
         </Grid>
         </Box>
         <Typography color='white'  sx={{marginTop:{xs:4, lg:10}}}><CopyrightRoundedIcon/> All Rights Reserved by Cafe360 I Made with<FavoriteRoundedIcon sx={{color:'red',justifyContent:'center',alignItems:'center'}}/>  I 2022</Typography>
</FooterContainer>
    </div>
  )
}

export default Footer