// import { useRef } from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import style from "../Components/Navbar.module.css";
import { useContext } from "react";
import Footer from "./Footer";
import { AppContext } from "../Context/AppContext";
import Home from "./Home";
import {
    Box,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'
import { Flex, Button, HStack, chakra } from '@chakra-ui/react';
import React from "react";
import {
    HamburgerIcon, CloseIcon,
    // ArrowBackIcon
} from "@chakra-ui/icons";

const data = [
    {
        label: "Home",
    },
    {
        label: "English",
    }, {
        label: "Hindi",
    }, {
        label: "Bengali",
    },
]
// const date=Date.now().toLocaleString();
let current_date = new Date();
let e_date = current_date.toDateString()

const CTA = "Get Started"


export default function Navbar() {


    const {isAuth}=useContext(AppContext)


    return (
        <div>
            <div className={style.NavbarMainDiv}>
                <div className={style.MenuIconBox}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                <Box spacing="5">
                                    {data.map((item, i) => (
                                        <Link key={i}>
                                            <Button variant="nav"> {item.label} </Button>
                                        </Link>
                                    ))}
                                </Box>
                                <Spacer />
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


            {/* <div className={style.HeadLogo}> */}
            <Flex w="full" align="center" justify="center">
                <div className={style.backbtn}>
                    {/* <ArrowBackIcon /> */}
                    <Box>
                        <Link to="#">{e_date}</Link>
                    <Text fontSize={12} fontWeight="10px">EPAPER | TODAY’S PAPER</Text>
                    </Box>
                </div>
                {/* <Spacer /> */}

                <Box style={{display:"flex", flexDirection:"column" ,alignItem:"center",justifyContent:"center"}}><Link to="/">
                    <img style={{marginTop:"20px"}}
                        src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
                        alt="Indian-express-logo"
                    />
                    </Link>
                    <Text align="center" fontWeight="bold" fontSize={15}>JOURNALISM OF COURAGE</Text>
                </Box>
                <Spacer />
                <Box></Box>
            </Flex>


            <Flex alignItems="center" justify="center" py={2} bg="gray.50" my={0.5}>
                <Box style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
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
                </Box>
                <Spacer />
                <Box gap="15px">
                    <Button color="black" bg="orange.300" mx={2}>Subscribe</Button>
                    <Link to="login"> <Button color="black" bg="orange.300" mx={2}>{isAuth?"My Account" : "Sign In"}</Button></Link>

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


            <Home />

            <Footer />

        </div>
    )




}

