import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <span id="nav-title">Google Book Search</span>
      </a>
      <a className={window.location.pathname === "/" || window.location.pathname === "/search"? "navbar-brand active" : "navbar-brand"} href="/search">
        find books</a>
      <span id="middle"> |  </span>
      <a className={window.location.pathname === "/saved"? "navbar-brand active" : "navbar-brand"} href="/saved">
        saved books
      </a>
    </nav>
  );
}

export default Nav;