import React from "react";
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
  return (
    <Container>
      <Content>
        <Cim>Registrate</Cim>
        <Input type={"text"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Input type={"password"} placeholder={"Repeat password"} />
        <Button>Registrate</Button>
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
