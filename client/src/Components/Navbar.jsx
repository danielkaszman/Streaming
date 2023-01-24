import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import Search from "./Search";
import Logout from "./Logout";
import MusicLink from "./MusicLink";
import ProfileLink from "./ProfileLink";

function Navbar({
  isHomeActive,
  isMusicActive,
  isProfileActive,
  setModalOpen,
}) {
  return (
    <Container>
      <Left>
        <Link to={"/"} className={isHomeActive ? "active" : ""}>
          <img src="/assets/logos/logo.png" alt="Logo" />
        </Link>
      </Left>

      <Middle>
        <Search />
      </Middle>

      <Right>
        <Hide>
          <MusicLink isMusicActive={isMusicActive} />

          <ProfileLink isProfileActive={isProfileActive} />

          <Logout span={false} />
        </Hide>

        <Hamburger>
          <IoMenuOutline onClick={() => setModalOpen(true)} />
        </Hamburger>
      </Right>
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  padding: 10px 40px;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(50, 50, 50, 0.5);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 30px 30px -10px;
  z-index: 10;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;

  a {
    width: 100%;
    height: 100%;

    &.active {
      cursor: default;
      pointer-events: none;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  div {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
    width: auto;
  }
`;

const Hide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  color: rgb(240, 240, 240);
  font-size: 30px;
  transition: all 250ms;

  :hover {
    cursor: pointer;
    color: rgb(192, 0, 0);
  }

  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;
