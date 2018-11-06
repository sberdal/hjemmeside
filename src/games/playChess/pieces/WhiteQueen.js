import React, { Component } from 'react';

class WhiteQueen extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26
    };
    return (
      <div>
        <i className="fas fa-chess-queen" style={style}/>
      </div>
    );
  }
}

export default WhiteQueen;