import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

class PageNotFound extends Component {

  componentDidMount(){
    document.getElementById("page_title").innerHTML = "404"
  }

  render() {
    const {labels} = this.props;
    return (
      <Typography variant="h5" color="primary">
        {labels}
        {console.log(this.props)}
      </Typography>
    );
  }
}

PageNotFound.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default PageNotFound;