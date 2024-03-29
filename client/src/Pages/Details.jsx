import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BsPlay, BsHeart, BsHeartFill, BsShare } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import Player from "../Components/Player";
import axios from "axios";
import { userContext } from "../Context/userContext";

function Details({ setIsHomeActive }) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [movie, setMovie] = useState();
  const params = useParams();

  const { user, setUser } = useContext(userContext);

  const userID = user._id;
  const userFavs = user.favourites;

  useEffect(() => {
    setIsHomeActive(false);

    getMovie();
  }, []);

  async function getMovie() {
    const response = await axios.get(`/movieRoutes/selected/${params.id}`);

    setMovie(response.data);
  }

  async function increaseViewCount(id) {
    await axios.put(`/movieRoutes/view/${id}`);

    getMovie();
  }

  async function likeMovie(id) {
    await axios.put(`/userRoutes/likeContent/${id}`, {
      userID,
    });

    if (userFavs.find((item) => item === id)) {
      await axios.put(`/movieRoutes/like/${id}`, {
        liked: true,
      });
    } else {
      await axios.put(`/movieRoutes/like/${id}`, {
        liked: false,
      });
    }

    getMovie();
    checkLogin();
  }

  function checkLogin() {
    axios.get("/userRoutes/loggedIn").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    });
  }

  return (
    <Container>
      <Player
        id={params.id}
        isPlayerOpen={isPlayerOpen}
        setIsPlayerOpen={setIsPlayerOpen}
      />
      {movie && (
        <>
          <Poster>
            <img src={`/assets/DB/video img/${movie.title + movie.coverExt}`} />
          </Poster>
          <Content>
            <h2>{movie.title}</h2>
            <Controls>
              <Play
                onClick={() => {
                  setIsPlayerOpen(true);
                  increaseViewCount(movie._id);
                }}
              >
                <BsPlay />
                <span>Play</span>
              </Play>
              <Like
                onClick={() => {
                  likeMovie(movie._id);
                }}
              >
                {userFavs.find((item) => item === movie._id) ? (
                  <BsHeartFill className="heartFill" />
                ) : (
                  <BsHeart />
                )}
              </Like>
            </Controls>
            <Info>
              <span>Views: {movie.views}</span>

              <GoPrimitiveDot />

              <span>Liked by {movie.likes} people</span>
            </Info>
            <p></p>
          </Content>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  position: relative;
  background-color: rgb(49, 49, 49);
  min-height: 100vh;
  padding-top: 70px;
  overflow: auto;
`;

const Poster = styled.div`
  height: 50vh;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
  }

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      rgba(49, 49, 49, 0) 20%,
      rgba(49, 49, 49, 0.5) 40%,
      rgba(49, 49, 49, 0.7) 60%,
      rgba(49, 49, 49, 1)
    );
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 40vh;
  color: rgb(240, 240, 240);
  padding-inline: 10%;
  padding-bottom: 50px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 40px;
    text-shadow: 5px 3px rgba(49, 49, 49, 0.5);
  }

  p {
    color: rgb(240, 240, 240);
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 25px;
    text-align: justify;
    margin-top: 30px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Play = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(240, 240, 240);
  color: rgb(49, 49, 49);
  border-radius: 10px;
  padding: 9px 20px;
  margin-right: 10px;
  font-size: 25px;
  font-weight: 400;
  z-index: 5;
  transition: all 250ms;

  svg {
    font-size: 35px;
    margin-right: 5px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: white;
  }
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(30, 30, 30, 0.5);
  border: 2px solid rgb(240, 240, 240);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin-left: 10px;
  font-size: 25px;
  z-index: 5;
  transition: transform 250ms;

  .heartFill {
    color: rgb(192, 0, 0);
  }

  :hover {
    cursor: pointer;
    background-color: rgb(30, 30, 30);
    transform: scale(1.05);
  }
`;

const Share = styled(Like)``;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

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
`;
