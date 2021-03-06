import React from "react";
import "./style.css";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children ,id }) {
  return <li id={id} className="list-group-item">{children}</li>;
}