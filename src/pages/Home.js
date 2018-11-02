import React from 'react';

class Home extends React.Component {

  componentWillMount(){
    console.log(this.props.params);
  }

  render(){
    return (
      <div>
        <h3>
          This is the Home Page !
        </h3>
      </div>
    );
  }
}

export default Home;