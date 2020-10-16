import React from "react";
import "./App.css";
import styled from "styled-components";
import Theme from './components/CssPalette';

import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrapper = styled.div`
color:${Theme.textColor};
min-height:100vh;
max-width:100vw;
box-sizing:border-box;
position:relative;
background-color:${Theme.background};
background-color: #872b86;
background-image: url("https://www.transparenttextures.com/patterns/inspiration-geometry.png");
`

function App() {
  return (
      <body>
    <Wrapper>
      <Header />
      <Gallery />
      <Footer />
    </Wrapper>
    </body>
  );
}

export default App;
