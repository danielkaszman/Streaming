import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
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

      {newRelease && <Content section={"New Releases"} covers={newRelease} />}

      {mostWatched && <Content section={"Most Watched"} covers={mostWatched} />}

      {popular && <Content section={"Popular"} covers={popular} />}

      {allMovies && <Content section={"All"} covers={allMovies} />}
    </Container>
  );
}

export default Home;
