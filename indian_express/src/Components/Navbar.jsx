// import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../Components/Navbar.module.css";
import Footer from "./Footer";
import {
    Box,
    Spacer ,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'
import {   Flex, Button,  HStack , chakra} from '@chakra-ui/react';
import React from "react";
import {
    HamburgerIcon,CloseIcon,
    // ArrowBackIcon
} from "@chakra-ui/icons";

const data=[
    {
        label:"Home",
    },
    {
        label:"Home",
    }, {
        label:"Home",
    }, {
        label:"Home",
    },
]
// const date=Date.now().toLocaleString();
let current_date=new Date();
let e_date=current_date.toDateString()

const CTA = "Get Started"


export default function Navbar() {




    return (
        <div>
            <div className={style.NavbarMainDiv}>
                <div className={style.MenuIconBox}>
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton bg="none"
                                        variant="none"
                                        fontSize="25px"
                                        color="white" isActive={isOpen} as={Button}>
                                        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                                    </MenuButton>
                                    <MenuList bg="black" className={style.megalist} >

                                        <div className={style.megamenu} >
                                            <div>
                                                <Link to="#">e-paper</Link>
                                                <Link to="#">Premium</Link>
                                                <Link to="#">India</Link>
                                                <Link to="#">Cities</Link>
                                            </div>

                                            <div>
                                                <Link to="#">Opinion</Link>
                                                <Link to="#">Political Pulse</Link>
                                                <Link to="#">Explained</Link>
                                                <Link to="#">Science</Link>
                                            </div>


                                            <div>
                                                <Link to="#">Sports</Link>
                                                <Link to="#">World</Link>
                                                <Link to="#">Business</Link>
                                                <Link to="#">Entertainment</Link>
                                            </div>

                                            <div>
                                                <Link to="#">Health</Link>
                                                <Link to="#">Lifestyle</Link>
                                                <Link to="#">Technology</Link>
                                                <Link to="#">Education</Link>
                                            </div>

                                            <div>
                                                <Link to="#">Eye</Link>
                                                <Link to="#">Trending</Link>
                                                <Link to="#">Investigation</Link>
                                                <Link to="#">Newsletter</Link>
                                            </div>

                                            <div>
                                                <Link to="#">Photos</Link>
                                                <Link to="#">Videos</Link>
                                                <Link to="#">Audio</Link>
                                                <Link to="#">Web stories</Link>
                                            </div>
                                        </div>

                                        <div>
                                            <div style={{ display: "flex", gap: "20px", marginLeft: "70px", marginBottom: "10px" }}>
                                                <Link to="#">Home</Link>
                                                <Link to="#">Explained</Link>
                                                <Link to="#">Political Pulse</Link>
                                                <Link to="#">India</Link>
                                                <Link to="#">Cities</Link>
                                                <Link to="#">Opinion</Link>
                                                <Link to="#">Entertainment</Link>
                                                <Link to="#">Lifestyle</Link>
                                                <Link to="#">Technology</Link>
                                                <Link to="#">Video</Link>
                                                <Link to="#">Sports</Link>
                                                <Link to="#">Audio</Link>
                                                <Link to="#">Education</Link>
                                                <Link to="#">Premium</Link>
                                                <Link to="#">Investigation</Link>
                                            </div>



                                        </div>



                                    </MenuList>



                                </>
                            )}
                        </Menu>

                        <chakra.header id="header">
      <Flex
        w="full"
        px="3"
        py="3"
        align="center"
        justify="space-between"
      >
      
        <HStack as="nav" spacing="5">
          {data.map((item, i) => (
            <Link key={i}>
              <Button variant="nav"> {item.label} </Button>
            </Link>
          ))}
        </HStack>
        <HStack>
          <Button color="white"
          colorScheme="red"
          marginLeft="800px">
            {CTA}
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
                    </div>








                </div>
            </div>


            <div className={style.HeadLogo}>
                <div className={style.backbtn}>
                    {/* <ArrowBackIcon /> */}
                    <Button>
                        <Link to="#">{e_date}</Link>
                    </Button>
                </div>

                <div><Link to ="/">
                    <img
                        src="	https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
                        alt="Indian-express-logo"
                    /></Link>
                </div>
            </div>
             

            <Flex  alignItems="center" justify="center" py={2} bg="gray.50" my={0.5}>
                <Box style={{display:"flex",gap:"10px",marginLeft:"25px"}}>
                <Link  to="#">Home</Link>
                <Link to="#">Explained</Link>
                <Link to="#">Political Pulse</Link>
                <Link to="#">India</Link>
                <Link to="#">Cities</Link>
                <Link to="#">Opinion</Link>
                <Link to="#">Entertainment</Link>
                <Link to="#">Lifestyle</Link>
                <Link to="#">Technology</Link>
                <Link to="#">Video</Link>
                <Link to="#">Sports</Link>
                <Link to="#">Audio</Link>
                <Link to="#">Education</Link>
                <Link to="#">Premium</Link>
                <Link to="#">Investigation</Link>
                </Box>
              <Spacer />
                <Box gap="15px"> 
                    <Button color="black" bg="orange.300" mx={2}>Subscribe</Button>
                   <Link to="login"> <Button color="black" bg="orange.300" mx={2}>Login</Button></Link>
                 
                </Box>

             </Flex> 
            {/* <div style={{ display: "flex", gap: "20px", marginLeft: "70px" }}>
                <Link to="#">Home</Link>
                <Link to="#">Explained</Link>
                <Link to="#">Political Pulse</Link>
                <Link to="#">India</Link>
                <Link to="#">Cities</Link>
                <Link to="#">Opinion</Link>
                <Link to="#">Entertainment</Link>
                <Link to="#">Lifestyle</Link>
                <Link to="#">Technology</Link>
                <Link to="#">Video</Link>
                <Link to="#">Sports</Link>
                <Link to="#">Audio</Link>
                <Link to="#">Education</Link>
                <Link to="#">Premium</Link>
                <Link to="#">Investigation</Link>
            </div> */}




<Footer />

        </div>
    )




}

