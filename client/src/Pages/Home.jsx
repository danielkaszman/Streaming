import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import MostWatched from "../Components/MostWatched";
import NewReleases from "../Components/NewReleases";
import Popular from "../Components/Popular";

function Home({ isHomeActive, setIsHomeActive }) {
  useEffect(() => {
    setIsHomeActive(true);
  }, []);

  return (
    <Container>
      <Navbar isHomeActive={isHomeActive} />
      <Carousel
        images={[
          <img src="/assets/posters/movies/Batman.jpg" alt="Batman poster" />,
          <img
            src="/assets/posters/series/Stranger Things.jpg"
            alt="Stranger Things poster"
          />,
          <img
            src="/assets/posters/movies/Dr. Strange.jpg"
            alt="Dr. Strange poster"
          />,
          <img
            src="/assets/posters/series/The Clone Wars.jpg"
            alt="The Clone Wars poster"
          />,
          <img
            src="/assets/posters/movies/John Wick.jpg"
            alt="John Wick poster"
          />,
          <img
            src="/assets/posters/series/Chernobyl.jpg"
            alt="Chernobyl poster"
          />,
        ]}
      />
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
