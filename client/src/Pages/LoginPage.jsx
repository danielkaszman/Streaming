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

function LoginPage() {
  return (
    <Container>
      <Content>
        <Cim>Login</Cim>
        <Input type={"text"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Button>Login</Button>
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
