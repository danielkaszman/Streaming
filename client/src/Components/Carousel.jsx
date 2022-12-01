import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ images }) {
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
        {images.map((image, index) => (
          <Wrap key={index}>{image}</Wrap>
        ))}
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
  padding-bottom: 80px;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 70px;
  }
`;

const Slide = styled(Slider)`
  width: 80%;
  height: 80%;
  padding-bottom: 10px;

  .slick-list {
    overflow: visible;
  }

  ul li button::before {
    color: rgb(240, 240, 240);
  }

  li.slick-active button::before {
    color: white;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  padding-inline: 10px;

  img {
    width: 100%;
    height: 100%;
    color: rgb(240, 240, 240);
    border: 4px solid rgba(121, 121, 121, 0.5);
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
    cursor: pointer;
    transition: all 250ms;

    :hover {
      border: 4px solid rgb(240, 240, 240);
      transform: scale(1.04);
    }

    @media screen and (max-width: 1200px) {
      border-radius: 20px;
    }

    @media screen and (max-width: 500px) {
      border-radius: 10px;
    }
  }
`;
