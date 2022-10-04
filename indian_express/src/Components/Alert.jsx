
// import {
//     Alert,
//     AlertIcon,
//     AlertTitle,
//     AlertDescription,
//   } from '@chakra-ui/react'

//   export default function AlertBox({title,description}){

//     return (<Alert
// status='success'
// variant='subtle'
// flexDirection='column'
// alignItems='center'
// justifyContent='center'
// textAlign='center'
// height='200px'
// >
// <AlertIcon boxSize='40px' mr={0} />
// <AlertTitle mt={4} mb={1} fontSize='lg'>
// {title}
// </AlertTitle>
// <AlertDescription maxWidth='sm'>
// {description}
// </AlertDescription>
// </Alert>
//     )

//   }


import {
  useDisclosure,
  AlertDialog,
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  // AlertDialogBody
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function LoginAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  return (
    <>
      <Button color="white" onClick={onOpen}>
        Login
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            {" "}
            Do you Agree with terms and conditions ?{" "}
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => navigate("/")}>
              Agree
            </Button>
          
            <Button  colorScheme="red" ml={3}>
              Disagree
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// import { FaRoad } from "react-icons/fa"


//   export default function LoignAlert(){
    

//   return <Alert
//   status='success'
//   variant='subtle'
//   flexDirection='column'
//   alignItems='center'
//   justifyContent='center'
//   textAlign='center'
//   height='200px'
// >
//   <AlertIcon boxSize='40px' mr={0} />
//   <AlertTitle mt={4} mb={1} fontSize='lg'>
//     Application submitted!
//   </AlertTitle>
//   <AlertDescription maxWidth='sm'>
//     Thanks for submitting your application. Our team will get back to you soon.
//   </AlertDescription>
// </Alert>

//   }
