import React from "react";
import "./buttonStyle.css";

export default function Button(props) {
  return (
    <>
      <div id="btn" {...props}>
        <span class="noselect">{props.children}</span>
        <div id="circle"></div>
      </div>
    </>
  );
}
