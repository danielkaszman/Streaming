import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <Container>
      <Navbar />
      <Carousel />
      <Filter />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: 100vh;
  background-color: rgb(49, 49, 49);
`;
