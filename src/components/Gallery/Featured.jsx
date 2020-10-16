import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Theme from '../CssPalette'

const Wrapper = styled.div`
img{
  border:${Theme.border};
}
.fullScreen
 {
    display: grid;
    grid-template-columns: 15% 1fr 15%;
    grid-template-rows: 5% 1fr 5%;
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
}
.preview img{
  display:block;
  max-height:50vh;
  max-width:50vw;
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 0 auto;
}
.preview .description{
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  text-align:left;
 
}
p{
  color:${Theme.textColor};
  background: none;
  border: none;
  font-size:1.5rem;
  font-family:${Theme.pText};
  padding:2rem;
  display:inline;
  cursor: pointer;
  margin-bottom:1rem;
}
.btn:hover{
  color:${Theme.highlightColor};
}
@media (max-width: 768px){
  padding-left:1rem;
  .description{
    padding-left:3rem
  };
  .fullScreen img {
    max-width: 90%;    
  }
}
@media (max-width:425px){
  padding:0;
  .preview{
   grid-template-columns: 25% 1fr 25%;
   grid-template-rows:1fr;
  }
  .preview img{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:2;    
    max-width:90vw;
  }
  .preview .backward{
    grid-row-start:2;
    grid-row-end:3;
    grid-column-start:1;
    grid-column-end:2;
  }
  .preview .toggle-size{
    grid-row-start:2;
    grid-row-end:3;
    grid-column-start:2;
    grid-column-end:3;
    font-size:1rem;
  }
  .preview forward{
    grid-row-start:2;
    grid-row-end:3;
    grid-column-start:3;
    grid-column-end:4;
  }
  .preview .description{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:3;
    grid-row-end:4;
  }
}
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
    // let arrowPress = 0;
    // document.addEventListener("keydown", function (event) {
    //     arrowPress = event.which;
    //     console.log(arrowPress);
    //     if (arrowPress == 39) {
    //         console.log("go forward");
    //         props.handleGoForward();
    //     }
    //     if (arrowPress == 37) {
    //         console.log("go back");
    //         props.handleGoBack()
    //     }else{
    //         console.log("none")
    //     }
    // })
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
        <p onClick={props.handleGoBack} className="backward btn">
                  {" "}{"<"}{" "}
                </p>

                <p onClick={props.handleDisplay} className="toggle-size btn">
                  {props.display === "preview" ? "Full Screen" : "Preview"}
                </p>

                <p onClick={props.handleGoForward} className="forward btn">
                  {" "}{">"}{" "}
                </p> 
      </div>
    </Wrapper>
  );
};

export default Featured;
