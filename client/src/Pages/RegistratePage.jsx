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
import { userContext } from "../Context/userContext";
import axios from "axios";

function RegistratePage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [msg, setMsg] = useState();

  const { setUser } = useContext(userContext);

  useEffect(() => {
    checkLogin();
  }, []);

  function registrate() {
    axios
      .post("/userRoutes/registrate", {
        name,
        email,
        password,
      })
      .then((response) => {
        setMsg(response.data);
        checkLogin();
      });
  }

  function checkLogin() {
    axios.get("/userRoutes/loggedIn").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    });
  }

  return (
    <Container>
      <Content>
        <Cim>Registrate</Cim>
        <Input
          type={"text"}
          placeholder={"Name"}
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
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
        <Input
          type={"password"}
          placeholder={"Repeat password"}
          onInput={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />
        <Warning>{msg}</Warning>
        <Button
          disabled={
            !name ||
            !email ||
            !password ||
            !repeatPassword ||
            password !== repeatPassword
          }
          onClick={registrate}
        >
          Registrate
        </Button>
        <Message>
          If you already have an account please{" "}
          <Link to={"/login"}>
            <span>Login</span>
          </Link>
          !
        </Message>
      </Content>
    </Container>
  );
}

export default RegistratePage;
