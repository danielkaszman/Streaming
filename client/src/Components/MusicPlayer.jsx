import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import Bounce from "react-reveal/Bounce";

function MusicPlayer({ id, isPlayerOpen, setIsPlayerOpen }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isPlayerOpen) {
      modalRef.current.play();
    }
  }, [isPlayerOpen]);

  function closeModal() {
    modalRef.current.pause();
    setIsPlayerOpen(false);
  }

  return (
    <Container isPlayerOpen={isPlayerOpen}>
      <Bounce top>
        <Content>
          <Close>
            <VscChromeClose onClick={closeModal} />
          </Close>

          <audio
            ref={modalRef}
            src={`http://localhost:3001/musicRoutes/stream/${id}`}
            controls
          />
        </Content>
      </Bounce>
    </Container>
  );
}

export default MusicPlayer;

const Container = styled.div`
  display: ${(props) => (props.isPlayerOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);

  z-index: 11;

  transition: all 250ms;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 20px;
  width: 100%;

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  audio {
    width: 50vw;

    @media screen and (max-width: 1200px) {
      width: 80vw;
    }
  }
`;
