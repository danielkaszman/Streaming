import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { IoTvOutline } from "react-icons/io5";

function Navbar({ isHomeActive, isMoviesActive, isSeriesActive }) {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Container inputFocus={inputFocus}>
      <Left>
        <Link to={"/"} className={isHomeActive ? "active" : ""}>
          <img src="/assets/logos/logo.png" alt="Logo" />
        </Link>
      </Left>
      <Middle inputFocus={inputFocus}>
        <Search inputFocus={inputFocus}>
          <Icon>
            <BsSearch />
          </Icon>
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </Search>
      </Middle>
      <Right>
        <Link to={"/movies"} className={isMoviesActive ? "active" : ""}>
          <BiMovie />
          <span>Movies</span>
        </Link>
        <Link to={"/series"} className={isSeriesActive ? "active" : ""}>
          <IoTvOutline />
          <span>Series</span>
        </Link>
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
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 30px -10px;
  z-index: 10;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;

  a {
    width: 100%;
    height: 100%;

    &.active {
      cursor: default;
      pointer-events: none;
    }
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-inline: 20px;
  color: rgb(240, 240, 240);
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  padding: 6px 6px;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.inputFocus ? "rgb(240,240,240)" : "rgb(49, 49, 49)")};
  width: 80%;
  transition: all 250ms;

  input {
    font-weight: 200;
    font-size: 20px;
    width: 100%;
    border: none;
    color: rgb(240, 240, 240);
    background-color: transparent;

    ::placeholder {
      color: rgb(155, 155, 155);
    }

    :focus {
      outline: none;
    }
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-inline: 20px;
    font-weight: 300;
    font-size: 20px;
    color: rgb(240, 240, 240);
    transition: all 250ms;

    span {
      margin-left: 5px;
    }

    &.active {
      color: rgb(192, 0, 0);
      cursor: default;
      pointer-events: none;
    }

    :hover {
      color: rgb(192, 0, 0);
    }
  }
`;
