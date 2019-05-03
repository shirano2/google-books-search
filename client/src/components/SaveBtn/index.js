import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  console.log(props)
  return (
    <span className="save-btn btn btn-primary" {...props} role="button" tabIndex="0" >{props.saved==="true"? "Saved" : "save"}</span>
  );
}

export default SaveBtn;
