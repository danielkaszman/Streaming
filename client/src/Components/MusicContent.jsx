import React, { useState } from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import MusicPlayer from "./MusicPlayer";

function MusicContent({ section, covers }) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [musicId, setMusicId] = useState();

  return (
    <Container>
      {musicId && (
        <MusicPlayer
          id={musicId}
          isPlayerOpen={isPlayerOpen}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      )}

      <Content>
        <h2>{section}</h2>

        {covers.map((cover, index) => (
          <Items
            key={index}
            onClick={() => {
              setMusicId(cover._id);
              setIsPlayerOpen(true);
            }}
          >
            <Image>
              <img
                src={`/assets/DB/music img/${cover.title + cover.coverExt}`}
              />
            </Image>

            <SpaceHolder>
              <Title>
                <h3>{cover.title}</h3>
              </Title>
              <Info>
                <span>Length: ???</span>
                <GoPrimitiveDot />
                <span>Views: {cover.listens}</span>
                <GoPrimitiveDot />
                <span>Liked by {cover.likes} people</span>
              </Info>
            </SpaceHolder>

            <Controls>
              <BsHeart />
            </Controls>
          </Items>
        ))}
      </Content>
    </Container>
  );
}

export default MusicContent;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding-inline: 20%;

  h2 {
    color: rgb(240, 240, 240);
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    padding-inline: 10%;
  }

  @media screen and (max-width: 998px) {
    padding-inline: 5%;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;

  height: 80px;
  border: 2px solid rgba(121, 121, 121, 0.4);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 10px 20px -5px;
  margin-bottom: 20px;
  padding-right: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms;

  :hover {
    border: 2px solid rgb(240, 240, 240);
    background-color: rgba(121, 121, 121, 0.8);
    transform: scale(1.05);
  }

  @media screen and (max-width: 998px) {
    padding-right: 10px;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 30px;
  margin-left: 5px;
  height: 90%;

  img {
    width: 100%;
    height: 100%;
    color: rgb(240, 240, 240);
    border-radius: 8px;
    object-fit: cover;
  }

  @media screen and (max-width: 998px) {
    margin-right: 10px;
  }
`;

const SpaceHolder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 50%;

  h3 {
    color: rgb(240, 240, 240);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  height: 50%;

  span {
    display: flex;
    align-items: center;

    color: rgba(240, 240, 240, 0.8);
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1px;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(240, 240, 240, 0.8);
    margin-inline: 10px;
  }

  @media screen and (max-width: 998px) {
    span {
      font-size: 10px;
    }

    svg {
      margin-inline: 5px;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(240, 240, 240, 0.7);
  transition: all 250ms;

  svg {
    transform: scale(1.5);
    color: rgb(49, 49, 49);
  }

  :hover {
    transform: scale(1.1);
    background-color: rgb(240, 240, 240);
  }
`;
