import React from 'react'
import styled from "styled-components";
import Theme from '../CssPalette'

const Wrapper= styled.div`
margin:auto;
padding-bottom:2rem;
.description-wrapper{
  
}
h1{
    font-family:${Theme.headingText};
    font-size:2rem;
    padding-bottom:1.25rem;
}
h3{
    font-family:${Theme.headingText};
    font-size:1.25rem;
    padding-bottom:1rem;
}    
p{
    font-family:${Theme.pText};
}
    `
const Description =(props)=>{

return(
    <>
    <Wrapper>
       <div className="description-wrapper">
        <h1>{props.title}</h1>  
        <h3>{props.location}</h3> 
        <p>{props.caption}</p>
        </div>       
    </Wrapper>
    </>
)

}

export default Description;