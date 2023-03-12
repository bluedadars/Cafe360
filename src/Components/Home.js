import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
  IconButton,
  Container,
  Box,
  Button,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerCon from "./DrawerCon";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import './App.css';
import {
  BannerContainer,
  BannerContent,
  BannerContent2,
  BannerImage,
  BannerImage1,
  BannerImage2,
  Content,
  Content2,
} from "./style";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { fontWeight } from "@mui/system";
const pages = ["Recipes", "Packages", "About", "Contact"];
const Home = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <React.Fragment>
        <Grid container sx={{ placeItems: "center" }}  spacing={6}>
          <AppBar sx={{ background: "white" }} elevation={1}>
            <Toolbar>
              {matches ? (
                <>
                  <Typography sx={{ color: "green" }}>CAFE360</Typography>
                  <DrawerCon />
                </>
              ) : (
                <>
                  <Grid item xs={3}>
                    <Typography
                      sx={{
                        color: "#34bf49",
                        fontFamily: "Josefin Sans",
                        fontSize: 30,
                        fontWeight: "bold",
                      }}
                    >
                      CAFE360
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Tabs
                      sx={{ "& button:hover": { color: "#34bf49" } }}
                      TabIndicatorProps={{ sx: { backgroundColor: "#34bf49" } }}
                      value={value}
                       textColor="primary"
                      onChange={(e, val) => setValue(val)}
                    >
                      {pages.map((listtxt, index) => (
                        <Tab key={index} label={listtxt} />
                      ))}
                    </Tabs>
                  </Grid>
                  <IconButton size="large" aria-label="search" color="#34bf49">
                    <SearchIcon />
                  </IconButton>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Grid>
        <Container>
        <Grid container marginTop="10%">
          <BannerContainer>
            <BannerContent >
              <Typography
                variant="h4"
                textAlign={"left"}
                justifyContent="flex-start"
                fontWeight={"Josefin Sans"}
              >
                Tasty & Healthy
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                fontFamily="Josefin Sans"
                textAlign={"left"}
                // color={"whitesmoke"}
              >
                Food Made With Love!
              </Typography>
              <Typography
              className="firstanim"
                variant="subtitle"
                sx={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  alignItems: "center",
                  color: "grey",
                }}
              >
                Lorem ipsum dolor sit amet . The graphic and typographic
                operators know this well, in reality all the professions dealing
                with the universe of communication have a stable relationship
                with these words, but what is it? Lorem ipsum is a dummy text
                without any sense.
              </Typography>

              <Button
              className="button"
                variant="contained"
                sx={{
                  marginRight: "auto",
                  marginTop: 4,
                  background: "green",
                  height: 60,
                }}
              >
                Customer Center
              </Button>
              <IconButton className="button" sx={{ marginLeft: 25, marginTop: -8 }}>
                <PlayArrowIcon
                  size={100}
                  sx={{ color: "green", height: 60, width: 60 }}
                />
                <Typography className="button">Watch Our Story</Typography>
              </IconButton>
            </BannerContent>
            <BannerImage1 className="App-logo" id="logo" src="/Images/dish.png" />
          </BannerContainer>
        </Grid>
        </Container>
        <Container>
          <Grid container>
            <Content className="right-slide" sx={{ textAlign: "center", justifyContent: "center" }}>
              <Typography
                variant="h3"
                marginTop={10}
                sx={{ color: "#34bf49", fontWeight: "bold" }}
              >
                Our Specialities
              </Typography>
              <Typography
                variant="subtitle"
                marginTop={2}
                sx={{ textAlign: "center", color: "grey" }}
              >
                Lorem ipsum dolor sit amet . The graphic and typographic
                operators know this well, in reality all the professions dealing
                with the universe of communication have a stable
              </Typography>
            </Content>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage src="/Images/specialities1.png" />
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="Josefin Sans"
                  textAlign={"left"}
                  
                  // color={"whitesmoke"}
                >
                  Find the best healthy food
                  <br /> from us
                </Typography>
                <Typography
                  marginTop={3}
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  Slightly believable here are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in top some form, by injected humour, or randomised
                  words which is to don't look even.
                </Typography>
              </BannerContent>
            </BannerContainer>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="Josefin Sans"
                  textAlign={"left"}

                  // color={"whitesmoke"}
                >
                  The most attractive dishes
                  <br />
                  for you
                </Typography>
                <Typography
                  marginTop={3}
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  Slightly believable here are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in top some form, by injected humour, or randomised
                  words which is to don't look even.
                </Typography>
              </BannerContent>
              <BannerImage src="/Images/specialities2.png" />
            </BannerContainer>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage src="/Images/specialities3.png" />
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="Josefin Sans"
                  textAlign={"left"}

                  // color={"whitesmoke"}
                >
                  Super fast home delivery
                  <br />
                  service
                </Typography>
                <Typography
                  marginTop={3}
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  Slightly believable here are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in top some form, by injected humour, or randomised
                  words which is to don't look even.
                </Typography>
              </BannerContent>
            </BannerContainer>
          </Grid>
        </Container>
        <Container>
          <Grid container>
            <Content sx={{ textAlign: "center", justifyContent: "center" }}>
              <Typography
                variant="h3"
                marginTop={10}
                sx={{
                  color: "#34bf49",
                  fontWeight: "bold",
                  fontWeight: "Josefin Sans",
                }}
              >
                Top Item's We Have{" "}
              </Typography>
              <Typography
                variant="subtitle"
                marginTop={2}
                sx={{ textAlign: "center", color: "grey" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit
              </Typography>
            </Content>
          </Grid>
        </Container>



        
        <Container>
          <Grid container>
            <Content sx={{ textAlign: "center", justifyContent: "center" }}>
              <Typography
                variant="h3"
                marginTop={10}
                sx={{
                  color: "#34bf49",
                  fontWeight: "bold",
                  fontWeight: "Josefin Sans",
                }}
              >
                Meet Our Great Chefs
              </Typography>
              <Typography
                variant="subtitle"
                marginTop={2}
                sx={{ textAlign: "center", color: "grey" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit.
              </Typography>
            </Content>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage2 src="/Images/specialities3.png" />
              <BannerContent2>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="Josefin Sans"
                  textAlign={"left"}

                  // color={"whitesmoke"}
                >
                  Magic chef ready to cook a new dish
                </Typography>
                <Typography
                  marginTop={3}
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  Slightly believable here are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in top some form, by injected humour, or randomised
                  words which is to don't look even. <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <Typography
                  marginTop={7}
                  variant="h6"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "green",
                  }}
                >
                  Jemmy Deniza
                </Typography>
                <Typography
                  marginTop={3}
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  Senior Chef, Cafe 360.
                </Typography>
                <Box justifyContent={"flex-start"} display="flex" marginTop={3}>
                  <Grid container justifyContent="flex-start" color={"wheat"}>
                    <FacebookIcon sx={{ mr: 3, color: "grey" }} />
                    <TwitterIcon sx={{ mr: 3, color: "grey" }} />
                    <WhatsAppIcon sx={{ mr: 3, color: "grey" }} />
                    <LinkedInIcon sx={{ mr: 3, color: "grey" }} />
                  </Grid>
                </Box>
              </BannerContent2>
            </BannerContainer>
          </Grid>
        </Container>
        <Grid item xs={12} sm={12} md={10} lg={12}>
          <Box
            sx={{
               backgroundImage: `url('/Images/bg.png')`,
               background:'black',
            
              backgroundSize: "cover",
              backgroundPosition: "center",
            
              width: { xs: "100%", md: "100%", lg: "100%" },
              height: "500px",
              
              // display:'flex'
            }}
          >
            
            <Box
              sx={{
                display: "flex",
                // border:'1px solid grey',
                width: { xs: "300px", sm: "300px", md: "700px", lg: "800px" },
                justifyItems: "center",
                marginLeft: { xs: "10%", sm: "30%", md: "30%", lg: "20%" },
                justifyContent: "center",
              }}
            >
        <Grid item xs={12} sm={12} md={10} lg={12}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        lg: "40px",
                        md: "60px",
                        sm: "60px",
                      },
                      color:'green',
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                      textAlign: "center",
                      paddingTop: { xs: 15, sm: 10, md: 10, lg: 7 },
                    //  marginLeft: { xs: "5%", sm: "5%", md: "5%", lg: "5%" },
                  
                    }}
                  >
                  Want to get the latest update?
                  </Typography>
                </Grid>
                </Box>
            <Box
              sx={{
                display: "flex",
                // border:'1px solid grey',
                width: { xs: "300px", sm: "300px", md: "700px", lg: "700px" },
                justifyItems: "center",
                marginLeft: { xs: "10%", sm: "20%", md: "20%", lg: "20%" },
                justifyContent: "center",
              }}
            >
            
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "10px",
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    marginTop:'13%'

                  },
                  fontWeight: "bold",
                  fontFamily: "Georgia, serif",
                  textAlign: "left",
                  justifyContent: "center",
                  color: "grey",
                  paddingBottom: { xs: 5, sm: 5, md: 5, lg: 20 },
                }}
              >
                There are many variations of passagessuffered alteration or
                eipsum dolor sit amet, consectetur adipiscing elit, sed do
                teiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit in
                voluptate velit.
                <Grid container>
                <Box justifyContent={'center'}margin='auto'>
                <Input type="text" placeholder="Your Email Id" sx={{background:'white',marginTop:10,textAlign:'center',width:{xs:'100',lg:'400px'},height:{xs:'30px',lg:'60px'}}}/>
                <Button  sx={{"&:hover": { background: "#34bf49", color: "white",borderRadius:'none' },background:'#34bf49',color:'white',height:{xs:'30px',lg:'65px'}}}>Send</Button>
                </Box>
            </Grid>
              </Typography>
            </Box>
            
          </Box>
        </Grid>
        <Container>
          <Grid container>
            <Content2 sx={{ textAlign: "center", justifyContent: "center" }}>
              <Typography
                variant="h3"
                marginTop={10}
                sx={{
                  color: "#34bf49",
                  fontWeight: "bold",
                  fontFamily: "Josefin Sans",
                }}
              >
          Download our App Today & Experience
          Endless Possibilities              </Typography>
              <Typography
                variant="subtitle"
                marginTop={2}
                sx={{ textAlign: "center", color: "grey" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit
              </Typography>
              <Button variant='contained' sx={{"&:hover": { background: "#34bf49", color: "white" },background:'#34bf49',width:'250px',height:'60px',marginTop:10}}>Download App</Button>
            </Content2>
          </Grid>
        </Container>
                <Footer/>
        {/* <ImageSlider /> */}
        {/* </Container> */}
      </React.Fragment>
    </div>
  );
};

export default Home;
