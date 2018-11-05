import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./LoadingIndicator.css"

const LoadingIndicator = () => (
  <div onClick={(e) => e.preventDefault()}>
    <div className="indicator">
      <CircularProgress color="secondary"/>
    </div>
  </div>
);

export default LoadingIndicator;