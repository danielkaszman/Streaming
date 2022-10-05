import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/login-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  padding: 50px 50px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  border-radius: 30px;
`;

export const Cim = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 400;
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

  :focus {
    outline-color: white;
  }
`;

export const Button = styled.button`
  height: 45px;
  margin: 10px 0px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  background-color: #c00000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 250ms;

  :hover {
    transform: scale(0.95);
  }

  :active {
    background-color: #8a0000;
  }
`;

export const Message = styled.p`
  color: white;
  font-weight: 200;
  font-size: 13px;
  margin-top: 10px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
