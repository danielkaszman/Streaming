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
            src="/assets/posters/series/Microphone.jpg"
            alt="Microphone poster"
          />,
          <img
            src="/assets/posters/series/Festival.jpg"
            alt="Festival poster"
          />,
          <img src="/assets/posters/series/Rapper.jpg" alt="Rapper poster" />,
          <img src="/assets/posters/series/Studio.jpg" alt="Studio poster" />,
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
