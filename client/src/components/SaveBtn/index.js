import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="save-btn btn btn-primary" {...props} role="button" tabIndex="0" >{props.saved==="true"? "Saved" : "save"}</span>
  );
}

export default SaveBtn;