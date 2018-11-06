import React, { Component } from 'react';

class WhiteBishop extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26
    };
    return (
      <div>
        <i className="fas fa-chess-bishop" style={style}/>
      </div>
    );
  }
}

export default WhiteBishop;