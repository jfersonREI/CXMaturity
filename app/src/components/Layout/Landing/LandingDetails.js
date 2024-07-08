import React from "react";
import "./LandingDetails.scss";

const LandingDetails = (props) => {
  return (
    <div className="landing-details">
      <div className="landing-details__header">
        <img
          src={props.logo}
          className="landing-details__logo"
          alt={props.logoAlt}
        />
      </div>
      <div className="landing-details__body">
        <div className="landing-details__body-header">
          <p className="landing-details__subtitle">{props.subtitle}</p>
          <p className="landing-details__title">{props.title}</p>
        </div>
        <div className="landing-details__copy">{props.copy}</div>
      </div>

      {props.children}
    </div>
  );
};

export default LandingDetails;
