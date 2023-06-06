import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import MusicContent from "../Components/MusicContent";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";
import axios from "axios";

function Music({
  setIsMusicActive,
  setIsHomeActive,
  setIsProfileActive,
  searchedMusic,
}) {
  const [allMusic, setAllMusic] = useState();
  const [mostListened, setMostListened] = useState();
  const [popular, setPopular] = useState();
  const [newRelease, setNewRelease] = useState();
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setIsMusicActive(true);
    setIsHomeActive(false);
    setIsProfileActive(false);

    getData();
  }, [changed]);

  async function getData() {
    const all = await axios.get("/musicRoutes/all");
    setAllMusic(all.data);

    const mostListened = await axios.get("/musicRoutes/mostListened");
    setMostListened(mostListened.data);

    const mostLiked = await axios.get("/musicRoutes/mostLiked");
    setPopular(mostLiked.data);

    const newRelease = await axios.get("/musicRoutes/newest");
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
      {searchedMusic ? (
        <MusicContent
          section={"Searched..."}
          covers={searchedMusic}
          changed={changed}
          setChanged={setChanged}
        />
      ) : (
        <>
          {newRelease && (
            <MusicContent
              section={"New Releases"}
              covers={newRelease}
              changed={changed}
              setChanged={setChanged}
            />
          )}

          {mostListened && (
            <MusicContent
              section={"Most Listened"}
              covers={mostListened}
              changed={changed}
              setChanged={setChanged}
            />
          )}

          {popular && (
            <MusicContent
              section={"Popular"}
              covers={popular}
              changed={changed}
              setChanged={setChanged}
            />
          )}

          {allMusic && (
            <MusicContent
              section={"All"}
              covers={allMusic}
              changed={changed}
              setChanged={setChanged}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default Music;
