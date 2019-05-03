import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Wrapper(props) {
  return (
    <div className="wrapper">{props.children}</div>
  );
}

export default Wrapper;