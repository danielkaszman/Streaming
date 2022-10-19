import React from "react";
import styled from "styled-components";
import { Items } from "./StyledComponents/Stats_Styled_Components";

function Filter() {
  return (
    <Container>
      <Items>
        <img src="/assets/logos/DC-logo.jpg" alt="DC logo" />
      </Items>
      <Items>
        <img src="/assets/logos/Marvel-logo.jpg" alt="Marvel logo" />
      </Items>
      <Items>
        <img src="/assets/logos/Star Wars-logo.jpg" alt="Star Wars logo" />
      </Items>
      <Items>
        <img
          src="/assets/logos/Harry Potter-logo.jpg"
          alt="Harry Potter logo"
        />
      </Items>
      <Items>
        <img
          src="/assets/logos/Jurassic Park-logo.jpg"
          alt="Jurassic Park logo"
        />
      </Items>
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 50px;
  padding-inline: 50px;
  padding-top: 70px;
  padding-bottom: 100px;
`;
