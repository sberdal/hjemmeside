import React, { Component } from 'react';

class WhiteRook extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26
    };
    return (
        <i className="fas fa-chess-rook" style={style}/>
    );
  }
}

export default WhiteRook;