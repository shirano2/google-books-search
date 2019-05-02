import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="navbar-brand" href="/search">
        find books
      </a>
      <a className="navbar-brand" href="/saved">
        saved
      </a>
    </nav>
  );
}

export default Nav;
