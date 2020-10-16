import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../CssPalette";

const Wrapper = styled.section`
  position: fixed;
  top: 25%;
  right: 25%;
  left: 25%;
  padding: 1rem;
  background: ${Theme.mediumPurple};
  box-sizing: border-box;
  h4 {
    font-size: 1.5rem;
    font-family: ${Theme.displayText};
    padding-bottom: 1rem;
  }
  p {
    padding-bottom: 1rem;
  }
  button {
    float: right;
  }
  .container {
    padding: 1rem;
    border: 0.25rem solid ${Theme.lightPurple};
    height: 60vh;
  }
  button {
    background: ${Theme.lightPurple};
    color: ${Theme.headerColor};
    border: 0.15rem solid ${Theme.headerColor};
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
  }
  button:hover {
    background: ${Theme.headerColor};
    color: ${Theme.lightPurple};
    border: 0.15rem solid ${Theme.lightPurple};
  }
  .container a {
    margin-top: 3rem;
  }
  @media (max-width: 425px) {
    top: 15%;
    right: 10%;
    left: 10%;
    .container {
      height: 80vh;
    }
  }
`;

const Purplechrome = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <button onClick={props.handleClick}>X</button>
        <h4>What is Lomography's Purplechrome?</h4>
        <p>
          LomoChrome Purple film is A delicate balance of the finest photon
          reactive silver halide crystals and special color compounds, this
          trippy emulsion yields spectacular psychedelic scenes.
        </p>
        <p>
          LomoChrome Purple film lets you explore the color spectrum like never
          before – Blue becomes green, green becomes purple and yellow becomes
          pink! Red tones stay red though, which keeps skin tones looking
          natural in a sea of trippy hues.
        </p>
        <a
          target="blank"
          href="https://shop.lomography.com/en/lomochrome-purple-film-35mm-5pack?country=us"
        >
          Visit Lomography's Website
        </a>
      </div>
    </Wrapper>
  );
};
export default Purplechrome;
