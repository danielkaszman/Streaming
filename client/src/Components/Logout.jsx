import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { userContext } from "../Context/userContext";
import { IoLogOutOutline } from "react-icons/io5";

function Logout({ span }) {
  const { setUser } = useContext(userContext);

  function logout() {
    axios.get("http://localhost:3001/userRoutes/logout").then(() => {
      checkLogin();
    });
  }

  function checkLogin() {
    axios.get("http://localhost:3001/userRoutes/loggedIn").then(() => {
      setUser(null);
    });
  }

  return (
    <Container onClick={logout}>
      <IoLogOutOutline />
      {span && <span>Logout</span>}
    </Container>
  );
}

export default Logout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(240, 240, 240);
  font-size: 25px;
  font-weight: 300;
  transition: all 250ms;

  span {
    font-size: 20px;
    margin-left: 5px;
  }

  :hover {
    cursor: pointer;
    color: rgb(192, 0, 0);
  }
`;
