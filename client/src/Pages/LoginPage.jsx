import React, { useState } from "react";
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

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <Warning>Wrong Username or Password!</Warning>
        <Button disabled={!email || !password}>Login</Button>
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
