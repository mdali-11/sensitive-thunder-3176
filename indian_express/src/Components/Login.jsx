
import { useState, useEffect } from "react";
import style from "../Components/Login.module.css";
import { Stack, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const getData = () => {
  const data = JSON.parse(localStorage.getItem("userData"));

  return data ? data : [];
};

const Login = () => {
  useEffect(() => {
    document.title = "Latest News,India Breaking News";
  }, []);

  const navigate = useNavigate();
  const [submit, setSubmit] = useState(getData());
  const [login, setLogin] = useState([]);
  const [IsUser, setIsUser] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    id: Date.now(),
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const HandleSignIn = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const HandleSignInSubmit = () => {
    setSubmit({ ...submit, signInData });
    setSignInData("");
    setIsUser(true);
   alert("Sign inSuccessfull")
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(submit));
  }, [submit]);

  const HandleLogin = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const HandleLogInSubmit = () => {
    console.log(submit, login);
    setLogin({ ...login, loginData });
    setLoginData("");

    for (let i = 0; i < submit.length; i++) {
      if (
        login[0].email === submit[i].email &&
        login[0].password === submit[i].password
      ) {
        alert("Login Succesfull")
        navigate("/");
      } else {
        alert("Please Enter Correct Details")
      }
    }
  };

  const goToLogin = () => {
    setIsUser(false);
  };

  const goToSignin = () => {
    setIsUser(true);
  };

  return (
    <div>
      <div className={style.HeadLogo}>
        <div className={style.backbtn}>
          <ArrowBackIcon />
          <Button>
            <Link to="/">Back to Indian Express</Link>
          </Button>
        </div>

        <div>
        <Link to="/"><img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
            alt="Indian-express-logo"
          /></Link>
        </div>
        </div>

      
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
                    <FaFacebook /> Continue with Facebook
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
                    <FaApple color="black" /> Continue with Apple
                  </div>
                </Box>
              </Stack>
              <div className={style.orDiv}>
                <div></div>
                <div>Or</div>
                <div></div>
              </div>
            </div>

            {!IsUser ? (
              <div className={style.AlreadySiginn}>
                <Stack>
                  <Text
                    fontSize="md"
                    w="90%"
                    margin="auto"
                    color="rgb(109 109 147"
                  >
                    Enter the email address or mobile number associated with
                    your account to sign in.
                  </Text>
                </Stack>
                <div className={style.InputDiv}>
                  <Input
                    variant="flushed"
                    name="email"
                    value={loginData.email}
                    placeholder="Enter your registered email/phone"
                    type="email"
                    onChange={HandleLogin}
                  />
                  <Input
                    variant="flushed"
                    name="password"
                    value={loginData.password}
                    placeholder="Password"
                    type="password"
                    onChange={HandleLogin}
                  />
                </div>

                <div className={style.SubmitButton}>
                  <Button size="lg" w="100%" onClick={HandleLogInSubmit}>
                    Log In
                  </Button>
                </div>

                <div className={style.TakingToSignIn}>
                  <div>
                    <Text color="gray.500">New to Indian Express ?</Text>
                  </div>
                  <div onClick={goToSignin}>
                    <h1>Create an account to get Started</h1>
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.NeedToSiginn}>
                <div className={style.InputDiv2}>
                  <Input
                    variant="flushed"
                    name="email"
                    type="email"
                    value={signInData.email}
                    placeholder="Emsil Address"
                    onChange={HandleSignIn}
                  />
                  <Input
                    variant="flushed"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={signInData.password}
                    onChange={HandleSignIn}
                  />
                  <Input
                    variant="flushed"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={signInData.password}
                    onChange={HandleSignIn}
                  />
                </div>

                <div className={style.TC}>
                  <div>
                    <input type="checkbox" />
                    <p>
                      Yes, I'd like to receive The Indian Express daily
                      newsletter.
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

                  <div className={style.TakingToSignIn}>
                    <div>
                      <Text color="gray.500">Already have an account ?</Text>
                    </div>
                    <div onClick={goToLogin}>
                      <h1>Sign In</h1>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>
      
    
  );
};

export default Login;
