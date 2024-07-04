import React from "react";
import "./LandingBadge.scss";

const LandingBadge = (props) => {
  return (
    <div className="landing-badge">
      <div className="landing-badge__badge">{props.label}</div>
    </div>
  );
};

export default LandingBadge;
