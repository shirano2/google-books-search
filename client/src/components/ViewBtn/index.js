import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <a {...props}>
      <span className="view-btn btn btn-primary" role="button" tabIndex="0">
        View
      </span>
    </a>
  );
}

export default ViewBtn;