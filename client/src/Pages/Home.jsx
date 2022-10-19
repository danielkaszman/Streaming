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
      <Carousel
        img1={
          <img src="/assets/posters/movies/Batman.jpg" alt="Batman poster" />
        }
        img2={
          <img
            src="/assets/posters/movies/Black Adam.jpg"
            alt="Black Adam poster"
          />
        }
        img3={
          <img
            src="/assets/posters/movies/Dr. Strange.jpg"
            alt="Dr. Strange poster"
          />
        }
        img4={
          <img
            src="/assets/posters/movies/John Wick.jpg"
            alt="John Wick poster"
          />
        }
        img5={<img src="/assets/posters/movies/Joker.jpg" alt="Joker poster" />}
        img6={
          <img src="/assets/posters/movies/Rampage.jpg" alt="Rampage poster" />
        }
        img7={
          <img
            src="/assets/posters/movies/Star Wars.jpg"
            alt="Star Wars poster"
          />
        }
      />
      <Filter
        img1={<img src="/assets/logos/movies/DC-logo.jpg" alt="DC logo" />}
        img2={
          <img src="/assets/logos/movies/Marvel-logo.jpg" alt="Marvel logo" />
        }
        img3={
          <img
            src="/assets/logos/movies/Star Wars-logo.jpg"
            alt="Star Wars logo"
          />
        }
        img4={
          <img
            src="/assets/logos/movies/Harry Potter-logo.jpg"
            alt="Harry Potter logo"
          />
        }
        img5={
          <img
            src="/assets/logos/movies/Jurassic Park-logo.jpg"
            alt="Jurassic Park logo"
          />
        }
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
