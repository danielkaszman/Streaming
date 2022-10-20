import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import MostWatched from "../Components/MostWatched";
import NewReleases from "../Components/NewReleases";
import Popular from "../Components/Popular";

function Movies({ isMoviesActive, setIsMoviesActive }) {
  useEffect(() => {
    setIsMoviesActive(true);
  }, []);

  return (
    <Container>
      <Navbar isMoviesActive={isMoviesActive} />
      <Carousel
        images={[
          <img src="/assets/posters/movies/Batman.jpg" alt="Batman poster" />,
          <img
            src="/assets/posters/movies/Black Adam.jpg"
            alt="Black Adam poster"
          />,
          <img
            src="/assets/posters/movies/Dr. Strange.jpg"
            alt="Dr. Strange poster"
          />,
          <img
            src="/assets/posters/movies/John Wick.jpg"
            alt="John Wick poster"
          />,
          <img src="/assets/posters/movies/Joker.jpg" alt="Joker poster" />,
          <img src="/assets/posters/movies/Rampage.jpg" alt="Rampage poster" />,
          <img
            src="/assets/posters/movies/Star Wars.jpg"
            alt="Star Wars poster"
          />,
        ]}
      />
      <Filter
        images={[
          <img src="/assets/logos/movies/DC-logo.jpg" alt="DC logo" />,
          <img src="/assets/logos/movies/Marvel-logo.jpg" alt="Marvel logo" />,
          <img
            src="/assets/logos/movies/Star Wars-logo.jpg"
            alt="Star Wars logo"
          />,
          <img
            src="/assets/logos/movies/Harry Potter-logo.jpg"
            alt="Harry Potter logo"
          />,
          <img
            src="/assets/logos/movies/Jurassic Park-logo.jpg"
            alt="Jurassic Park logo"
          />,
        ]}
      />
      <NewReleases />
      <MostWatched />
      <Popular />
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  background-color: rgb(49, 49, 49);
  overflow-x: hidden;
`;
