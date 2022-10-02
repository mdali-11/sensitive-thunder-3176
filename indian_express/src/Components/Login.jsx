import React, { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import { AppContext } from "../Context/AppContext";
import {
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Flex,
  Spacer,
  Image,
  Button

} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const getData = () => {
  const data = JSON.parse(localStorage.getItem("userInfoCreds"));
  
  if (data) {
    // console.log("data", data);
    return data;
  } else {
    return [];
  }
};


const Login = () => {
const {handleisAuth}=useContext(AppContext)

  useEffect(() => {
    document.title = "Login Page: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
  }, [])
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(getData());
  // const [login, setLogin] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [signInCreds, setSignInCreds] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    id: Date.now(),
  });

  // const [loginCreds, setLoginCreds] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");

  const HandleSignIn = (e) => {
    let { name, value } = e.target;
    // console.log( type, name, value);

    setSignInCreds({
      ...signInCreds,
      [name]: value,
    });
  };

  const HandleSignInSubmit = () => {
    setSubmit([...submit, signInCreds]);
    setSignInCreds("");
    setIsUser(true);
    alert("Thank! You're Successfully Signed In to Indian Express");
  };

  useEffect(() => {
    localStorage.setItem("userInfoCreds", JSON.stringify(submit));
  }, [submit]);

  // const HandleLogin = (e) => {
  //   let { name, value } = e.target;
  //   // console.log( name, value);
  //   setLoginCreds({
  //     ...loginCreds,
  //     [name]: value,
  //   });
  // };
  let obj={
    email,
    password,
  }

  const HandleLogInSubmit = () => {
    console.log("submit", submit);

    if(check(submit,obj))
    {
            alert(`Thank! You're Successfully Signed In to Indian Express`);
            handleisAuth();
            navigate("/");
            
          } else {
            alert(`Wrong Email Or Password`);
          }
   
    // setLogin([...login, loginCreds]);
    //  console.log("Login", login);
    // setLoginCreds("");

  }

  // if(login.length!==0){

  //   setTimeout(()=>{
  //     logit(submit,login)
  //   },2000)
  //   return ;
  // }


  
  // function logit(submit,login){
  //     if (
  //        check(submit,login)
  //     ) {
  //       alert(`Thank! You're Successfully Signed In to Indian Express`);
  //       navigate("/");
        
  //     } else {
  //       alert(`Wrong Email Or Password`);
  //     }
  
  // };








  

  const GotoLogin = () => {
    setIsUser(false);
  };

  const GoToSignIn = () => {
    setIsUser(true);
  };

  return (
    <div>
      <div className={style.HeadLogo}>
        <div className={style.backbtn}>
          <ArrowBackIcon />
          <Button>
            <Link to="/">Back to IndianExpress</Link>
          </Button>
        </div>

        <div>
          <img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
            alt="IndianExpress"
          />
        </div>
      </div>

      <Flex style={{marginTop:"50px", marginBottom:"50px"}} w="80%" margin="auto" h="250px">
    <Box w="55%">
      <Heading>Express full access package offers e-paper + premium</Heading>
      <Text mt={5}>Full access to all journalism of The Indian Express</Text>
       <Text>Access to ePaper archives</Text>
       <Text>Invites to * premium IE events*</Text>
       <Text>Access to all premium stories</Text>
       <Text>Access to all exclusive newsletters</Text>
       <Text>Ad-lite experience across platforms</Text>

       <Text mt={15}>For multi-user and corporate subscriptions, Click here</Text>

    </Box>
    <Spacer />
    <Box W="100%">
    <Image width="450px" src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/Laptop_header-image_1.1.png"/>

    </Box>

    </Flex>
      <div className={style.LoginContainor}>
        <div className={style.LoginForm}>
          <Heading as="h2" size="md" noOfLines={1}>
            WELCOME BACK
          </Heading>
          <Stack spacing={4}>
            <Box
              textAlign="center"
              bg="#d6d3d32e"
              w="100%"
              p={2}
              border="1px solid #cfcfcf"
              borderRadius="12px"
            >
              <div className={style.IconDiv}>
                <FcGoogle /> Continue with Google
              </div>
            </Box>

            <Box
              textAlign="center"
              bg="#d6d3d32e"
              w="100%"
              p={2}
              border="1px solid #cfcfcf"
              borderRadius="12px"
            >
              <div className={style.IconDiv}>
                <FaFacebook color="rgb(1, 1, 145)" /> Continue with Facebook
              </div>
            </Box>
            <Box
              textAlign="center"
              bg="#d6d3d32e"
              w="100%"
              p={2}
              border="1px solid #cfcfcf"
              borderRadius="12px"
            >
              <div className={style.IconDiv}>
                <FaApple color="black" />
                Continue with Apple
              </div>
            </Box>
          </Stack>

          <div className={style.orDiv}>
            <div></div>
            <div>or</div>
            <div></div>
          </div>
        </div>

        {!isUser ? (
          <div className={style.AlreadySiginn}>
            <Stack>
              <Text
                fontSize="md"
                w="90%"
                margin="auto"
                color="rgb(109 109 147)"
              >
                Enter the email address or mobile number associated with your
                account to sign in.
              </Text>
            </Stack>
            <div className={style.InputDiv}>
              <Input
                variant="flushed"
                name="email"
                value={email}
                placeholder="Insert your registered Email/Phone"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Input
                variant="flushed"
                name="password"
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div className={style.SubmitButton}>
              <Button size="lg" w="100%" onClick={HandleLogInSubmit}>
                Log In
              </Button>
            </div>

            <div className={style.TakingtoSignIn}>
              <div>
                <Text color="gray.500">New to Indian Express?</Text>
              </div>
              <div onClick={GoToSignIn}>
                <h1>Create an account to get started</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.NeedToSiginn}>
            <div className={style.InputDiv2}>
              <Input
                variant="flushed"
                name="email"
                value={signInCreds.email}
                placeholder="Email Address"
                type="email"
                onChange={HandleSignIn}
              />
              <Input
                variant="flushed"
                name="password"
                value={signInCreds.password}
                placeholder="Password"
                type="password"
                onChange={HandleSignIn}
              />
              <Input
                variant="flushed"
                name="confirmPassword"
                value={signInCreds.confirmPassword}
                placeholder="Confirm Password"
                type="password"
                onChange={HandleSignIn}
              />
            </div>

            <div className={style.TC}>
              <div>
                <input type="checkbox" />
                <p>
                  Yes, I'd like to receive The Indian Express daily newsletter.
                </p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Accept Terms and Conditions and our privacy policy</p>
              </div>
            </div>

            <div className={style.SubmitButton}>
              <Button size="lg" w="100%" onClick={HandleSignInSubmit}>
                Register
              </Button>
            </div>

            <div className={style.TakingtoSignIn}>
              <div>
                <Text color="gray.500">Already Have an Account?</Text>
              </div>
              <div onClick={GotoLogin}>
                <h1>Sign in</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

function check(submit,login){
  for (let i = 0; i < submit.length; i++) {
    if (
      login.email === submit[i].email &&
      login.password === submit[i].password
    ){
      return true;
    }
    return false;
  }

}
