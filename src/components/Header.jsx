import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="Header" className="Area">
        <h1>
          <img
            src={require("../images/title2.png")}
            alt="Inhuman"
            height="60em"
          />
        </h1>
      </header>
    );
  }
}

export default Header;
