import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgMusic } from "react-icons/cg";

function MusicLink({ isMusicActive }) {
  return (
    <Container>
      <Link to={"/music"} className={isMusicActive ? "active" : ""}>
        <CgMusic />
        <span>Music</span>
      </Link>
    </Container>
  );
}

export default MusicLink;

const Container = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
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
