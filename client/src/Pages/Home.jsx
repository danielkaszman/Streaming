import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Content from "../Components/Content";
import { Container } from "../Components/StyledComponents/Main_Bg_Container";

function Home({ isHomeActive, setIsHomeActive }) {
  useEffect(() => {
    setIsHomeActive(true);
  }, []);

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
        section={"All"}
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

export default Home;
