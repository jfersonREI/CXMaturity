import React from "react";
import "./AppContainer.scss";

export default function AppContainer(props) {
  return <div className="app-container">{props.children}</div>;
}
