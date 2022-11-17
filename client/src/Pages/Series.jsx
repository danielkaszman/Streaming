import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Filter from "../Components/Filter";
import Content from "../Components/Content";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";

function Series({ isSeriesActive, setIsSeriesActive }) {
  useEffect(() => {
    setIsSeriesActive(true);
  }, []);

  return (
    <Container>
      <Navbar isSeriesActive={isSeriesActive} />

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
      <Filter
        images={[
          <img
            src="/assets/logos/series/The Clone Wars-logo.jpg"
            alt="The Clone Wars logo"
          />,
          <img src="/assets/logos/series/F1.jpg" alt="Formula 1 logo" />,
          <img
            src="/assets/logos/series/Stranger Things-logo.png"
            alt="Stranger Things logo"
          />,
          <img
            src="/assets/logos/series/Breaking Bad-logo.jpg"
            alt="Breaking Bad logo"
          />,
          <img
            src="/assets/logos/series/Moon Knight.jpg"
            alt="Moon Knight logo"
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
        section={"All Series"}
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
    </Container>
  );
}

export default Series;
