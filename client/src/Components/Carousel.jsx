import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(props) {
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
        <Wrap>{props.img1}</Wrap>
        <Wrap>{props.img2}</Wrap>
        <Wrap>{props.img3}</Wrap>
        <Wrap>{props.img4}</Wrap>
        <Wrap>{props.img5}</Wrap>
        <Wrap>{props.img6}</Wrap>
        <Wrap>{props.img7}</Wrap>
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
  padding-bottom: 20px;

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
  padding-inline: 10px;

  img {
    width: 100%;
    height: 100%;
    color: rgb(240, 240, 240);
    border: 4px solid rgba(121, 121, 121, 0.5);
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
    cursor: pointer;
    transition: all 250ms;

    :hover {
      border: 4px solid rgb(240, 240, 240);
      transform: scale(1.04);
    }
  }
`;
