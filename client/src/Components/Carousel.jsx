import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Container>
      <Slide {...settings}>
        <Wrap>
          <img src="/assets/posters/Batman.jpg" alt="Batman poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/Black Adam.jpg" alt="Black Adam poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/Dr. Strange.jpg" alt="Dr. Strange poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/John Wick.jpg" alt="John Wick poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/Joker.jpg" alt="Joker poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/Rampage.jpg" alt="Rampage poster" />
        </Wrap>
        <Wrap>
          <img src="/assets/posters/Star Wars.jpg" alt="Star Wars poster" />
        </Wrap>
      </Slide>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

const Slide = styled(Slider)`
  width: 80%;
  height: 80%;

  .slick-list {
    overflow: visible;
  }

  ul li button::before {
    color: rgb(240, 240, 240);
  }

  li.slick-active button::before {
    color: white;
  }
`;

const Wrap = styled.div`
  padding-inline: 5px;

  img {
    width: 100%;
    height: 1000%;
    border: 4px solid rgba(121, 121, 121, 0.5);
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
    cursor: pointer;
    transition: all 250ms;

    :hover {
      border: 4px solid rgb(240, 240, 240);
      transform: scale(1.03);
    }
  }
`;
