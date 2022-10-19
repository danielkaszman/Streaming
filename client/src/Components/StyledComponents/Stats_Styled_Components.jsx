import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 50px;
  margin-bottom: 70px;

  h2 {
    color: rgb(240, 240, 240);
    font-weight: 700;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  margin-top: 10px;
`;

export const Items = styled.div`
  border-radius: 20px;
  border: 4px solid rgba(121, 121, 121, 0.5);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 70px 50px -20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms;

  img {
    width: 100%;
    height: 100%;
    color: rgb(240, 240, 240);
    object-fit: cover;
  }

  :hover {
    border: 4px solid rgb(240, 240, 240);
    transform: scale(1.05);
  }
`;
