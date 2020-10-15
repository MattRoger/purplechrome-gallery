import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Theme from '../CssPalette'

const Wrapper = styled.div`
.fullScreen
 {
    display: grid;
    grid-template-columns: 15% 1fr 15%;
    grid-template-rows: 5% 1fr 5%;
    z-index: 1000;
    box-sizing: border-box;
    margin: auto;
    height: 100vh;
  }

.fullScreen .toggle-size { 
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: flex-end;
}

.fullScreen img {
  max-width: 100%;
  max-height: 95vh;
  margin: 0 auto;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
}
.fullScreen .forward{
  justify-content:flex-end;

}
.fullScreen .forward, 
.fullScreen .backward{
  display:flex;
  align-items:center;
}

.fullScreen .forward {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
.fullScreen .backward {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
.fullScreen .description{
  display:none;
}
.preview{
  text-align:center;
  padding-top:1vh;
  display:grid;
  grid-template-columns:2.5% 45% 2.5% 50%;
  grid-template-rows:1fr 5rem;
  padding-left:1vw;
}
.preview img{
  display:block;
  max-height:65vh;
  max-width:50vw;
  border:${Theme.imgBorder};
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 0 auto;
}

.preview .description{
  margin-left:2rem;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  text-align:left;
}

`;

const Button = styled.div`
background: none;
border: none;
font-size:1.5rem;
font-family:${Theme.headingText};
padding:2rem;
display:inline;
cursor: pointer;
margin-bottom:1rem;
`;

const Featured = (props) => {
  const photos = props.photos;
  const selected = props.selected;
  let photo = " ";
  const handleSelected = () => {
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].id === selected) {
        return (photo = photos[i]);
      }
    }
  };
  handleSelected();

  const handleArrowKeys = () => {
    let arrowPress = 0;
    document.addEventListener("keydown", function (event) {
        arrowPress = event.which;
        console.log(arrowPress);
        if (arrowPress == 39) {
            console.log("go forward");
            props.handleGoForward();
        }
        if (arrowPress == 37) {
            console.log("go back");
            props.handleGoBack()
        }else{
            console.log("none")
        }
    })
  };
  handleArrowKeys();
  return (
    <Wrapper>
      <div className={props.display}>
       <div className="description">
              <Description 
                title={photo.title}
                location={photo.location}
                caption={photo.caption}                         
                />
          </div>
        <img src={photo.src} alt={photo.title} />
        <Button onClick={props.handleGoBack} className="backward">
                  {" "}{"<"}{" "}
                </Button>

                <Button onClick={props.handleDisplay} className="toggle-size">
                  {props.display === "preview" ? "Full Screen" : "Preview"}
                </Button>

                <Button onClick={props.handleGoForward} className="forward">
                  {" "}{">"}{" "}
                </Button> 
      </div>
    </Wrapper>
  );
};

export default Featured;
