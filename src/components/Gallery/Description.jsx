import React from 'react';
import styled from "styled-components";
import Theme from '../CssPalette';

const Wrapper= styled.div`

padding-bottom:2rem;
width:80%;
h1,h3{
    font-family:${Theme.displayText};
}
h1{
    font-size:2rem;
    padding-bottom:1.25rem;
}
h3{    
    font-size:2rem;
    padding-bottom:1rem;
}    
.caption{
font-size:1.25rem;
line-height:1.5rem;
}
`

const Description =(props)=>{

return(
    <>
    <Wrapper>       
        <h1>{props.title}</h1>  
        <h3>{props.location}</h3> 
        <p className='caption'>{props.caption}</p>              
    </Wrapper>
    </>
)

}

export default Description;