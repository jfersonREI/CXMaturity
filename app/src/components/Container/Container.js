import React from "react";
import "./Container.scss";

export default function Container(props) {
  return <div className="app-container">{props.children}</div>;
}
