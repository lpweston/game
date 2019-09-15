import React, { Component } from "react";

class Map extends Component {
  state = {};
  render() {
    return (
      <div id="Map" className="Area">
        <h2>Map:</h2>
        <img src={require("../images/map.png")} width="50%" alt="map" />
      </div>
    );
  }
}

export default Map;
