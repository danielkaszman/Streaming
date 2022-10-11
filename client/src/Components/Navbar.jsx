import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { IoTvSharp } from "react-icons/io5";

function Navbar() {
  return (
    <Container>
      <Left>
        <img src="/assets/logo.png" alt="" />
      </Left>
      <Middle>
        <Search>
          <Icon>
            <BsSearch />
          </Icon>
          <input type="text" placeholder="Search..." />
        </Search>
      </Middle>
      <Right>
        <a href="">
          <BiMovie />
          <span>Movies</span>
        </a>
        <a href="">
          <IoTvSharp />
          <span>Series</span>
        </a>
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
  background-color: rgb(26, 26, 26);
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    width: 80%;
    height: 80%;
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
  width: 80%;

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

    :hover {
      color: rgb(230, 0, 0);
    }
  }
`;
