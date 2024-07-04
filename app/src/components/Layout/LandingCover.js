import React from "react";
import "./LandingCover.scss";
import coverImg from "../../assets/landing/landing-cover.png";
import LandingBadge from "./LandingBadge";

const LandingCover = (props) => {
  return (
    <div className="landing-cover">
      <img src={coverImg} className="landing-image" alt="Cover" />
      <LandingBadge label="CX" />
      {props.children}
    </div>
  );
};

export default LandingCover;
