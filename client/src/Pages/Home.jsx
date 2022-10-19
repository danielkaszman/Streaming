import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import MostWatched from "../Components/MostWatched";
import Navbar from "../Components/Navbar";
import NewReleases from "../Components/NewReleases";
import Popular from "../Components/Popular";

function Home() {
  return (
    <Container>
      <Navbar />
      <Carousel />
      <Filter />
      <NewReleases />
      <MostWatched />
      <Popular />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: rgb(49, 49, 49);
  overflow-x: hidden;
`;
