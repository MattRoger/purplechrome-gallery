import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import styled from "styled-components";
import Theme from '../CssPalette';
import Purplechrome from '../Purplechrome'

const Wrapper = styled.div`
display:flex;
justify-content:space-evenly;
a{
    font-size:1.25rem;      
    font-family:${Theme.displayText};
    padding:.5rem;
    color:${Theme.textColor}
}
a:hover{
  color:${Theme.highlightColor}
}

`;

class Footer extends Component {
  state={
    show:false,
  }    
  handleClick=()=>{
    this.setState({
      show: !this.state.show
    });
  }
  render(){
    return (
      <Wrapper>
          <a href="#" onClick={this.handleClick}>What is Purplechrome?</a>
        <ToggleDisplay show={this.state.show}>
          <Purplechrome handleClick={this.handleClick}/>
        </ToggleDisplay>
      <a target="blank" href="https://www.fws.gov/refuge/rocky_mountain_arsenal/">Visit The Rocky Mountain Arsenal</a>
      <a target="blank" href="https://www.facebook.com/MattRogerCo/">More Works by Matt Roger</a>
    </Wrapper>
  );
}
};

export default Footer;