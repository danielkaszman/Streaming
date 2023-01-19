import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Cim,
  Input,
  Warning,
  Button,
  Message,
} from "../Components/StyledComponents/Login_Styled_Components";
import axios from "axios";
import { userContext } from "../Context/userContext";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();

  const { setUser } = useContext(userContext);

  useEffect(() => {
    checkLogin();
  }, []);

  function login() {
    axios
      .post("http://localhost:3001/userRoutes/login", { email, password })
      .then((response) => {
        setMsg(response.data);
        checkLogin();
      });
  }

  function checkLogin() {
    axios.get("http://localhost:3001/userRoutes/loggedIn").then((response) => {
      if (response.data.loggedIn === true) {
        console.log(response.data.user);
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    });
  }

  return (
    <Container>
      <Content>
        <Cim>Login</Cim>
        <Input
          type={"text"}
          placeholder={"Email"}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Warning>{msg}</Warning>
        <Button disabled={!email || !password} onClick={login}>
          Login
        </Button>
        <Message>
          If you don't have an account please{" "}
          <Link to={"/registrate"}>
            <span>Registrate</span>
          </Link>
          !
        </Message>
      </Content>
    </Container>
  );
}

export default LoginPage;
