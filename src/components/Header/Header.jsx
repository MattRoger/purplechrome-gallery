import React from "react";
import styled from "styled-components";
import Theme from '../CssPalette'


const Header = () => {
  const Wrapper = styled.div`
  background:${Theme.headerColor};  
  display:flex;
  align-items:baseline;
  justify-content:space-around;
  color:${Theme.lightPurple};
  border-bottom:.25rem solid;
  margin-bottom:1rem;
  h1, h2{
      font-family:${Theme.cursiveText};
  }
  h1{
    font-size:2rem;
    padding:1.25rem;
  }
  h2{
    font-size:1.75rem;
    padding:1.25rem;

  }
  span{
    font-family:${Theme.displayText};
  }
  @media (max-width:425px){
    text-align:center;
        
    display:block;
    h1{
      font-size:1.25rem;
      padding:.25rem;
    };
    h2{
      font-size:1rem;
      padding:.25rem;
    };
  }
  `;

 return (
    <Wrapper>
      <h1><span>PurpleChrome</span> At the Arsenal</h1>
      <h2><span>Photography by </span>Matt Roger</h2>
    </Wrapper>
  );
};

export default Header;