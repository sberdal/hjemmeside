import React, { Component } from 'react';

class WhitePawn extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26,
      lineHeight: '250%',
    };
    return (
      <div>
        <i className="fas fa-chess-pawn" style={style}/>
      </div>
    );
  }
}

export default WhitePawn;