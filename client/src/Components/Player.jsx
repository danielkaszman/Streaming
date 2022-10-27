import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import Bounce from "react-reveal/Bounce";

function Player({ src, isPlayerOpen, setIsPlayerOpen }) {
  return (
    <Container isPlayerOpen={isPlayerOpen}>
      <Bounce top>
        <Content>
          <Close>
            <VscChromeClose onClick={() => setIsPlayerOpen(false)} />
          </Close>
          <video src={src} controls />
        </Content>
      </Bounce>
    </Container>
  );
}

export default Player;

const Container = styled.div`
  display: ${(props) => (props.isPlayerOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: ${(props) =>
    props.isPlayerOpen ? "rgba(0, 0, 0, 0.8)" : "rgb(0, 0, 0)"};
  backdrop-filter: ${(props) =>
    props.isPlayerOpen ? "blur(7px)" : "blur(0px)"};

  z-index: 11;

  transition: all 250ms;
`;

const Content = styled.div`
  width: 60vw;

  video {
    border-radius: 30px;
    height: 100%;
    width: 100%;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 20px;

  svg {
    font-size: 30px;
    color: rgba(240, 240, 240, 0.5);
    cursor: pointer;
    transition: all 250ms;

    :hover {
      color: rgb(240, 240, 240);
      transform: scale(2);
    }
  }
`;
