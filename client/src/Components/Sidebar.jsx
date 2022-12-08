import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import Search from "./Search";

function Sidebar({ modalOpen, setModalOpen }) {
  return (
    <Container modalOpen={modalOpen}>
      <Close>
        <VscChromeClose onClick={() => setModalOpen(false)} />
      </Close>

      <SearchBar>
        <Search />
      </SearchBar>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  position: fixed;
  right: 0px;
  top: 0;
  height: 100vh;
  width: 300px;
  ${(props) =>
    props.modalOpen
      ? "transform: translate(0px)"
      : "transform: translate(300px)"};
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(15px);
  border-left: 1px solid rgba(50, 50, 50, 0.5);
  ${(props) =>
    props.modalOpen
      ? "box-shadow: rgba(0, 0, 0, 0.8) -20px 0px 30px 0px;"
      : ""};
  z-index: 11;
  transition: all 250ms;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 10px;
  margin-right: 10px;

  svg {
    color: white;
    font-size: 30px;
    transition: all 250ms;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
      color: rgb(192, 0, 0);
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0px;

  div {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;
