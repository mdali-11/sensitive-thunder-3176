// import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../Components/Navbar.module.css";
import {
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { 
 
     CloseIcon } from "@chakra-ui/icons";

import {
 
    Button,
   
} from "@chakra-ui/react"
import {
    HamburgerIcon,
    // Search2Icon,SearchIcon 
} from "@chakra-ui/icons";

export default function Navbar() {




    return (
        <div>
        <div className={style.NavbarMainDiv}>
            <div className={style.MenuIconBox}>
                <div>
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
                                    
                                    <div  className={style.megamenu} >
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
                                        <div style={{display:"flex" ,gap:"20px",marginLeft:"70px",marginBottom:"10px"}}>
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
                    </div>


               


                   
                    
                </div>
            </div>

            
            <div className={style.HeadLogo}>
        <div className={style.backbtn}>
          <ArrowBackIcon />
          <Button>
            <Link to="#">Back to Indian Express</Link>
          </Button>
        </div>

        <div>
          <img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
            alt="Indian-express-logo"
          />
        </div>
        </div>

        <div style={{display:"flex" ,gap:"20px",marginLeft:"70px"}}>
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
    )




}

