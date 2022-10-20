import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import MostWatched from "../Components/MostWatched";
import NewReleases from "../Components/NewReleases";
import Popular from "../Components/Popular";

function Series({ isSeriesActive, setIsSeriesActive }) {
  useEffect(() => {
    setIsSeriesActive(true);
  }, []);

  return (
    <Container>
      <Navbar isSeriesActive={isSeriesActive} />
      <Carousel
        images={[
          <img
            src="/assets/posters/series/Breaking Bad.jpg"
            alt="Breaking Bad poster"
          />,
          <img
            src="/assets/posters/series/Chernobyl.jpg"
            alt="Chernobyl poster"
          />,
          <img
            src="/assets/posters/series/DTS.jpg"
            alt="Drive to Survive poster"
          />,
          <img src="/assets/posters/series/Lucifer.jpg" alt="Lucifer poster" />,
          <img
            src="/assets/posters/series/Stranger Things.jpg"
            alt="Stranger Things poster"
          />,
          <img
            src="/assets/posters/series/The Clone Wars.jpg"
            alt="The Clone Wars poster"
          />,
        ]}
      />
      <Filter
        images={[
          <img
            src="/assets/logos/series/Breaking Bad-logo.jpg"
            alt="Breaking Bad logo"
          />,
          <img
            src="/assets/logos/series/The Clone Wars-logo.jpg"
            alt="The Clone Wars logo"
          />,
          <img
            src="/assets/logos/series/Stranger Things-logo.png"
            alt="Stranger Things logo"
          />,
          <img src="/assets/logos/series/F1.jpg" alt="Formula 1 logo" />,
          <img
            src="/assets/logos/series/Moon Knight.jpg"
            alt="Moon Knight logo"
          />,
        ]}
      />
      <NewReleases />
      <MostWatched />
      <Popular />
    </Container>
  );
}

export default Series;

const Container = styled.div`
  background-color: rgb(49, 49, 49);
  overflow-x: hidden;
`;
