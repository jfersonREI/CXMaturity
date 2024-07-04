import React from "react";
import "./LandingWrapper.scss";

const LandingWrapper = (props) => {
  return <div className="landing-wrapper">{props.children}</div>;
};

export default LandingWrapper;
