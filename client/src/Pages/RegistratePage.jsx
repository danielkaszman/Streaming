import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Cim,
  Input,
  Button,
  Message,
} from "../Components/StyledComponents/Styled_Components";

function RegistratePage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

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
        <Button
          disabled={
            !name ||
            !email ||
            !password ||
            !repeatPassword ||
            password !== repeatPassword
          }
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
