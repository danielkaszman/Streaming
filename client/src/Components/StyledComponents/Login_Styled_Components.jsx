import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-image: url("/assets/login-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;

  width: 400px;
  padding: 50px 50px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 30px;
`;

export const Cim = styled.h2`
  color: rgb(240, 240, 240);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 17px;
  font-weight: 200;
  padding: 17px 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);

  :focus {
    background-color: rgb(240, 240, 240);
    outline-color: rgb(240, 240, 240);
  }
`;

export const Warning = styled.p`
  font-size: 18px;
  color: red;
`;

export const Button = styled.button`
  height: 45px;
  margin: 20px 0px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  background-color: rgb(192, 0, 0);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 250ms;

  :hover {
    transform: scale(0.95);
  }

  :active {
    background-color: rgb(138, 0, 0);
  }

  :disabled {
    transform: scale(1);
    background-color: gray;
    color: lightgray;
    cursor: default;
  }
`;

export const Message = styled.p`
  color: white;
  font-weight: 200;
  font-size: 13px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
