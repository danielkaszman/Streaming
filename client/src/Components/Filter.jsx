import React from "react";
import styled from "styled-components";

function Filter({ images }) {
  return (
    <Container>
      {images.map((image, index) => (
        <Logo key={index}>{image}</Logo>
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
  padding-bottom: 80px;

  @media screen and (max-width: 1200px) {
    grid-gap: 30px;
    padding-bottom: 70px;
    padding-inline: 30px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

  @media screen and (max-width: 500px) {
    border-radius: 10px;
  }
`;
