import React from "react";
import styled from "styled-components";
import Theme from '../CssPalette'


const Header = () => {
  const Wrapper = styled.div`
  h1, h2{
      display:inline;
  }


  `;

 return (
    <Wrapper>
      <h1>Purplechrome At the Arsenal</h1>
      <h2>Photography by Matt Roger</h2>
    </Wrapper>
  );
};

export default Header;