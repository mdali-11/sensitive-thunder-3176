import {   Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import {Link} from 'react-scroll'
import React from "react";
const CTA = "Get Started"
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
export default function Header() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
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
          <Button>
            {CTA}
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}