import React, { Component } from 'react';

class WhiteKing extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26
    };
    return (
      <div>
        <i className="fas fa-chess-king" style={style}/>
      </div>
    );
  }
}

export default WhiteKing;