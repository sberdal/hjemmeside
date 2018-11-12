import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

class WelcomePage extends Component {

  componentDidMount(){
    document.getElementById("page_title").innerHTML = "Sondre's hub"
  }

  render() {
    const {labels} = this.props;
    return (
      <Typography variant="h5" color="primary">
        {labels}
      </Typography>
    );
  }
}

WelcomePage.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default WelcomePage;