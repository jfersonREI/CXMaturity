import React from "react";
import "./LandingDetails.scss";

const LandingDetails = (props) => {
  return <div className="landing-details">{props.children}</div>;
};

export default LandingDetails;
