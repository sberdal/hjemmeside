import React from 'react';

class Home extends React.Component {

  componentDidMount(){
    document.getElementById("page_title").innerHTML = this.props.labels.page_title;
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