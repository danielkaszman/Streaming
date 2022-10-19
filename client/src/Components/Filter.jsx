import React from "react";
import styled from "styled-components";
import { Items } from "./StyledComponents/Stats_Styled_Components";

function Filter(props) {
  return (
    <Container>
      <Items>{props.img1}</Items>
      <Items>{props.img2}</Items>
      <Items>{props.img3}</Items>
      <Items>{props.img4}</Items>
      <Items>{props.img5}</Items>
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
