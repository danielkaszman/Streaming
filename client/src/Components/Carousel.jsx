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
          <img src="/assets/Batman.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/assets/Black Adam.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/assets/Dr. Strange.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/assets/John Wick.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/assets/Joker.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/assets/Rampage.jpg" alt="" />
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

  ul li button {
    :before {
      color: rgb(240, 240, 240);
    }
  }

  li.slick-active button:before {
    color: white;
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 1000%;
    border-inline: 5px solid rgba(121, 121, 121, 0.5);
    border-top: 7px solid rgba(121, 121, 121, 0.5);
    border-bottom: 7px solid rgba(121, 121, 121, 0.5);
    box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
    cursor: pointer;

    :hover {
      border-inline: 5px solid rgb(240, 240, 240);
      border-top: 7px solid rgb(240, 240, 240);
      border-bottom: 7px solid rgb(240, 240, 240);
    }
  }
`;
