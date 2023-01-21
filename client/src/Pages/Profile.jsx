import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsGear } from "react-icons/bs";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";
import { userContext } from "../Context/userContext";

function Profile({ setIsHomeActive, setIsMusicActive, setIsProfileActive }) {
  const { user, setUser } = useContext(userContext);
  const email = user.email;

  useEffect(() => {
    setIsHomeActive(false);
    setIsMusicActive(false);
    setIsProfileActive(true);

    checkLogin();
  }, []);

  function changeName() {
    const newName = prompt("Enter new name:");

    axios
      .put("http://localhost:3001/userRoutes/changeName", { newName, email })
      .then(() => {
        checkLogin();
      });
  }

  function changeEmail() {
    const newEmail = prompt("Enter new Email:");

    axios
      .put("http://localhost:3001/userRoutes/changeEmail", { newEmail, email })
      .then(() => {
        checkLogin();
      });
  }

  function changePwd() {
    const newPwd = prompt("Enter new password:");

    axios
      .put("http://localhost:3001/userRoutes/changePwd", { newPwd, email })
      .then(() => {
        checkLogin();
      });
  }

  function checkLogin() {
    axios.get("http://localhost:3001/userRoutes/loggedIn").then((response) => {
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
        <Title>
          <h1>Profile Page of "{user.name}"</h1>
        </Title>
        <Data>
          <h2>Name:</h2>
          <p>
            {user.name} <BsGear onClick={changeName} />
          </p>
        </Data>
        <Data>
          <h2>Email:</h2>
          <p>
            {user.email} <BsGear onClick={changeEmail} />
          </p>
        </Data>
        <Data>
          <h2>Password:</h2>
          <p>
            ***** <BsGear onClick={changePwd} />
          </p>
        </Data>
      </Content>
    </Container>
  );
}

export default Profile;

const Content = styled.div`
  padding-top: 100px;
  padding-inline: 10%;
  color: rgb(240, 240, 240);
  letter-spacing: 1px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 30px;
`;

const Data = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 20px;

  p {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-left: 20px;

    svg {
      margin-left: 20px;
      cursor: pointer;

      :hover {
        color: rgb(192, 0, 0);
      }
    }
  }
`;
