import React, { Component } from 'react';

class WhiteKnight extends Component{
  render(){
    const style = {
      color: '#ffffff',
      fontSize : 26
    };
    return (
      <div>
        <i className="fas fa-chess-knight" style={style}/>
      </div>
    );
  }
}

export default WhiteKnight;