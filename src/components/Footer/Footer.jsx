import React from "react";
import styled from "styled-components";
import Theme from '../CssPalette'


const Footer = () => {
  const Wrapper = styled.div`
 a{
      display:inline;
  }


  `;

 return (
    <Wrapper>
      <a>What is Purplechrome?</a>
      <a>Visit The Rocky Mountain Arsenal</a>
      <a>More Works by Matt Roger</a>
    </Wrapper>
  );
};

export default Footer;