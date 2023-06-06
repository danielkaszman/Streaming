import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Components/Carousel";
import Content from "../Components/Content";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";

function Home({
  setIsHomeActive,
  setIsMusicActive,
  setIsProfileActive,
  searchedMovie,
}) {
  const [allMovies, setAllMovies] = useState();
  const [mostWatched, setMostWatched] = useState();
  const [popular, setPopular] = useState();
  const [newRelease, setNewRelease] = useState();

  useEffect(() => {
    setIsHomeActive(true);
    setIsMusicActive(false);
    setIsProfileActive(false);

    getData();
  }, []);

  async function getData() {
    const all = await axios.get("/movieRoutes/all");
    setAllMovies(all.data);

    const mostWatched = await axios.get("/movieRoutes/mostWatched");
    setMostWatched(mostWatched.data);

    const mostLiked = await axios.get("/movieRoutes/mostLiked");
    setPopular(mostLiked.data);

    const newRelease = await axios.get("/movieRoutes/newest");
    setNewRelease(newRelease.data);
  }

  return (
    <Container>
      <Carousel
        images={[
          <img src="/assets/posters/movies/Sunset.jpg" alt="Sunset poster" />,
          <img src="/assets/posters/movies/Guitar.jpg" alt="Guitar poster" />,
          <img src="/assets/posters/movies/Fire.jpg" alt="Fire poster" />,
          <img src="/assets/posters/movies/Nature.jpg" alt="Nature poster" />,
        ]}
      />
      {searchedMovie ? (
        <Content section={"Searched..."} covers={searchedMovie} />
      ) : (
        <>
          {newRelease && (
            <Content section={"New Releases"} covers={newRelease} />
          )}

          {mostWatched && (
            <Content section={"Most Watched"} covers={mostWatched} />
          )}

          {popular && <Content section={"Popular"} covers={popular} />}

          {allMovies && <Content section={"All"} covers={allMovies} />}
        </>
      )}
    </Container>
  );
}

export default Home;
