import React, { Component } from "react";
import Thumbnails from "./Thumbnails"
import Featured from "./Featured"
import styled from "styled-components";
import Photos from '../../utils/Photos.json';


const Wrapper= styled.div`
.thumbnails{
    
}
`

class Gallery extends Component{
    state={
        selected:1,
        gallery:Photos,
        display:"preview"
    }
    
    
    handleSetKey = () => {
       const tempGal= this.handlePhotoKey;
        this.setState({
            gallery:tempGal
        })
    }


handleGoForward = () =>{
    if(this.state.selected < this.state.gallery.length){
        this.setState((prevState)=>{
            return{
                selected:prevState.selected +=1
            }
        })      
    }else{
        this.setState({
            selected:1,
        })
    }
}
handleGoBack = () =>{
    if(this.state.selected !=1){
        this.setState((prevState)=>{
            return{
                selected:prevState.selected -=1
            }
        })      
    }else{
        this.setState({
            selected: this.state.gallery.length,
        })
    }
}

handleDisplay = ()=>{
    console.log("clicked")
    if(this.state.display ==="preview"){
        this.setState({
            display:"fullScreen"
        })
    }else{
        this.setState({
            display:"preview"
        })
    }

}

handleSetSelected = (select)=>{
    this.setState({
        selected:select
    })
}

render(){
    return(
        <Wrapper>
        {this.handleSetKey}
        <Featured
         photos={this.state.gallery}
         selected={this.state.selected}
         handleGoForward={this.handleGoForward}
         handleGoBack={this.handleGoBack}
         handleDisplay={this.handleDisplay}
        display={this.state.display}
        />
        <div className="thumbnails">
            <Thumbnails
            photos={this.state.gallery}
            handleSetSelected={this.handleSetSelected} 
            />
        </div>
        </Wrapper>
    )
}
}


export default Gallery;