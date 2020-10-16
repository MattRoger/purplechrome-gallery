import React from "react";
import styled from "styled-components";
import Theme from './components/CssPalette';

import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrapper = styled.div`
background-color:${Theme.background};
color:${Theme.textColor};
min-height:100vh;
max-width:100vw;
box-sizing:border-box;
position:relative;
`

function App() {
  return (
    <Wrapper>
      <Header />
      <Gallery />
      <Footer />
    </Wrapper>
  );
}

export default App;
