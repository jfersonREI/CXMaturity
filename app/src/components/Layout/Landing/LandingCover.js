import React from "react";
import "./LandingCover.scss";
import LandingBadge from "./LandingBadge";

const LandingCover = ({ badge, ...props }) => {
  return (
    <div className="landing-cover">
      <img src={props.image} alt={props.alt} className="landing-image" />
      <LandingBadge badge={badge} />
      {props.children}
    </div>
  );
};

export default LandingCover;
