import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

function Sidebar({ modalOpen, setModalOpen }) {
  return (
    <Container modalOpen={modalOpen}>
      <Close>
        <VscChromeClose onClick={() => setModalOpen(false)} />
      </Close>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  height: 100vh;
  width: 300px;
  ${(props) =>
    props.modalOpen
      ? "transform: translate(0px)"
      : "transform: translate(300px)"};
  transition: all 250ms;
  background-color: rgba(10, 10, 10, 1);
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

    :hover {
      font-size: 40px;
      cursor: pointer;
    }
  }
`;
