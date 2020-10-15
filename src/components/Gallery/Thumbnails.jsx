import React from "react";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import Theme from '../CssPalette'


const Wrapper = styled.div` 
  width:60vw;
  margin:auto;
  cursor: pointer;
  img {
    max-height:12vh;
    border:${Theme.border};
    margin:.25rem;
  }
  img:hover{
    border:${Theme.borderHover};
  }
`;
const Thumbnails = (props) => {

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
