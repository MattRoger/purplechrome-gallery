import React from 'react'

const Thumbnail=(props)=>{
    const handleOnClick = ()=>{
        props.handleSetSelected(props.id)
    }
    return(
        <img 
        src={props.src}
        id={props.id}
        alt={props.alt}
        onClick={handleOnClick}/>
    )

}

export default Thumbnail