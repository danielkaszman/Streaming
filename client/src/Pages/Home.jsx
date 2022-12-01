import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import Content from "../Components/Content";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";

function Home({ isHomeActive, setIsHomeActive }) {
  const [allMovies, setAllMovies] = useState();
  const [mostWatched, setMostWatched] = useState();
  const [popular, setPopular] = useState();
  const [newRelease, setNewRelease] = useState();

  useEffect(() => {
    setIsHomeActive(true);

    getData();
  }, []);

  async function getData() {
    const all = await axios.get("http://localhost:3001/movieRoutes/all");
    setAllMovies(all.data);

    const mostWatched = await axios.get(
      "http://localhost:3001/movieRoutes/mostWatched"
    );
    setMostWatched(mostWatched.data);

    const mostLiked = await axios.get(
      "http://localhost:3001/movieRoutes/mostLiked"
    );
    setPopular(mostLiked.data);

    const newRelease = await axios.get(
      "http://localhost:3001/movieRoutes/newest"
    );
    setNewRelease(newRelease.data);
  }

  return (
    <Container>
      <Navbar isHomeActive={isHomeActive} />

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

      {newRelease && <Content section={"New Releases"} covers={newRelease} />}

      {mostWatched && <Content section={"Most Watched"} covers={mostWatched} />}

      {popular && <Content section={"Popular"} covers={popular} />}

      {allMovies && <Content section={"All"} covers={allMovies} />}
    </Container>
  );
}

export default Home;
