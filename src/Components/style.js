
import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
export const BannerContainer =styled(Box)(({theme})=>({
display:'flex',
justifyContent:'center',
width:'100%',
height:'100%',
alignItems: 'center',
backgroundColor:'#ffffff',
marginTop:'10%',
[theme.breakpoints.down('lg')]:{
    alignItems:'center',
    marginTop:'8%'
},
[theme.breakpoints.down('md')]:{
    alignItems:'center',
    marginTop:'5%'
},
[theme.breakpoints.down('sm')]:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:'17%'
},
[theme.breakpoints.down('xs')]:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:'20%'
}
}));
export const BannerContent=styled(Box)(({theme})=>({
display:'flex',
flexDirection:'column',
padding:'70px',
// justifyContent:'center',
maxWidth:'100%',
// marginRight:'120px',
[theme.breakpoints.down('sm')]:{
    maxWidth:'100%',
},
[theme.breakpoints.down('xs')]:{
    maxWidth:'100%',

}
}));
export const Content=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    padding:'70px',
    // justifyContent:'center',
    maxWidth:'100%',
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
margin:'auto'
   
    }));
    export const Content2=styled(Box)(()=>({
        display:'flex',
        flexDirection:'column',
        padding:'70px',
        // justifyContent:'center',
        maxWidth:'100%',
        textAlign:'center',
        justifyContent:'center',
        alignItems: 'center',
    margin:'auto'
       
        }));
export const BannerImage = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'500px',
    height:'400px',
    borderRadius:'0%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'100%'
    }
}));
export const BannerImage1 = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'700px',
    height:'500px',
    borderRadius:'0%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'100%'
    }
}));
export const BannerImage2 = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'400px',
    height:'500px',
    borderRadius:'0%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'100%'
    }
}));
export const BannerContent2=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    padding:'70px',
    marginBottom:'60px',
    // justifyContent:'center',
    maxWidth:'100%',
    // marginRight:'120px',
    }));
export const FooterContainer = styled(Box)(({theme})=>({
    width:'100%',
    height:'500px',
    background:'black',
    textAlign:'center',
    justifyContent:'center',
    justifyItems:'center',
    [theme.breakpoints.down('md')]:{
    width:'100%',
    justifyContent:'center',
    justifyItems:'center'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        justifyContent:'center',
        justifyItems:'center',  
        alignItems:'center' 
    }
}));
export const FooterContent = styled(Typography)(({theme})=>({
    marginTop:'5%',
    display:'flex',
    justifyItems:'center',
    justifyContent:'center',
    margin:'5%',
}))