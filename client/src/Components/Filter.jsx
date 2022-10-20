import React from "react";
import styled from "styled-components";

function Filter({ images }) {
  return (
    <Container>
      {images.map((image) => (
        <Logo>{image}</Logo>
      ))}
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 50px;
  padding-inline: 50px;
  padding-bottom: 100px;
`;

const Logo = styled.div`
  border-radius: 20px;
  border: 4px solid rgba(121, 121, 121, 0.5);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms;

  img {
    width: 100%;
    height: 100%;
    color: rgb(240, 240, 240);
    object-fit: cover;
  }

  :hover {
    border: 4px solid rgb(240, 240, 240);
    transform: scale(1.05);
  }
`;
