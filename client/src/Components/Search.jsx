import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Container inputFocus={inputFocus}>
      <Icon>
        <BsSearch />
      </Icon>
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  flex: 0.9;
  align-items: center;

  padding: 6px 6px;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.inputFocus ? "rgb(240,240,240)" : "rgb(49, 49, 49)")};
  transition: all 250ms;

  input {
    font-weight: 200;
    font-size: 20px;
    width: 100%;
    border: none;
    color: rgb(240, 240, 240);
    background-color: transparent;

    ::placeholder {
      color: rgb(155, 155, 155);
    }

    :focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-inline: 20px;
  color: rgb(240, 240, 240);
`;
