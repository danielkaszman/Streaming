import React from "react";
import styled from "styled-components";
import { Items } from "./StyledComponents/Stats_Styled_Components";

function Filter({ images }) {
  return (
    <Container>
      {images.map((image) => (
        <Items>{image}</Items>
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
