import React, { useEffect } from "react";
import styled from "styled-components";
import { Background } from "../Components/StyledComponents/Main_Bg_Image";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import Content from "../Components/Content";

function Movies({ isMoviesActive, setIsMoviesActive }) {
  useEffect(() => {
    setIsMoviesActive(true);
  }, []);

  return (
    <>
      <Navbar isMoviesActive={isMoviesActive} />
      <Background />
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
      <Content
        section={"New Releases"}
        covers={[
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
        ]}
      />
      <Content
        section={"Most Watched"}
        covers={[
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
        ]}
      />
      <Content
        section={"Popular"}
        covers={[
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
        ]}
      />
      <Content
        section={"All Movies"}
        covers={[
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
          <img src="/assets/covers/Star Wars 4.jpg" alt="" />,
        ]}
      />
    </>
  );
}

export default Movies;
