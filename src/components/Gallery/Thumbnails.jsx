import React from "react";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import Theme from '../CssPalette'


const Thumbnails = (props) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content:space-evenly;
    width:90vw;
    margin:auto;
    cursor: pointer;
    img {
      max-height:12vh;
      border:${Theme.imgBorder}
    }
  `;

 return (
    <Wrapper>
      {props.photos.map((photo) =>
       (<Thumbnail 
        src={photo.src} 
        id={photo.id} key={photo.id} 
        alt={props.alt}
        handleSetSelected={props.handleSetSelected} />
          ))
      }
    </Wrapper>
  );
};

export default Thumbnails;
