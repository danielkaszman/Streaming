import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import MusicContent from "../Components/MusicContent";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";
import axios from "axios";

function Music({ setIsMusicActive, setIsHomeActive, setIsProfileActive }) {
  const [allMusic, setAllMusic] = useState();
  const [mostListened, setMostListened] = useState();
  const [popular, setPopular] = useState();
  const [newRelease, setNewRelease] = useState();

  useEffect(() => {
    setIsMusicActive(true);
    setIsHomeActive(false);
    setIsProfileActive(false);

    getData();
  }, []);

  async function getData() {
    const all = await axios.get("http://localhost:3001/musicRoutes/all");
    setAllMusic(all.data);

    const mostListened = await axios.get(
      "http://localhost:3001/musicRoutes/mostListened"
    );
    setMostListened(mostListened.data);

    const mostLiked = await axios.get(
      "http://localhost:3001/musicRoutes/mostLiked"
    );
    setPopular(mostLiked.data);

    const newRelease = await axios.get(
      "http://localhost:3001/musicRoutes/newest"
    );
    setNewRelease(newRelease.data);
  }

  return (
    <Container>
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

      {newRelease && (
        <MusicContent section={"New Releases"} covers={newRelease} />
      )}

      {mostListened && (
        <MusicContent section={"Most Listened"} covers={mostListened} />
      )}

      {popular && <MusicContent section={"Popular"} covers={popular} />}

      {allMusic && <MusicContent section={"All"} covers={allMusic} />}
    </Container>
  );
}

export default Music;
