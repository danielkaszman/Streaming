import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Content({ section, covers }) {
  return (
    <Container>
      <h2>{section}</h2>
      <Grid>
        {covers.map((cover, index) => (
          <Items key={index}>
            <Link to={`details/${cover._id}`}>
              <img src={`/assets/DB/${cover.title + cover.coverExt}`} />
              <Layer>
                <h3>{cover.title}</h3>
              </Layer>
            </Link>
          </Items>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  padding-inline: 50px;
  padding-bottom: 70px;

  h2 {
    color: rgb(240, 240, 240);
    font-weight: 700;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 998px) {
    padding-inline: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 30px;
  margin-top: 10px;

  @media screen and (max-width: 1200px) {
    grid-gap: 20px;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 998px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Items = styled.div`
  position: relative;
  border-radius: 20px;
  border: 3px solid rgba(121, 121, 121, 0.5);
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
    border: 3px solid rgb(240, 240, 240);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;

const Layer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 5;

  h3 {
    color: rgb(240, 240, 240);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
