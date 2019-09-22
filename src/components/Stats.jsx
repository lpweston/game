import React, { Component } from "react";

class Stats extends Component {
  render() {
    const { health, room, inventory } = this.props;
    return (
      <ul id="Stats" className="Area">
        <li>Health: {health}</li>
        <li>Location: {room}</li>
        <li>
          Inventory:
          <ul>
            {Object.keys(inventory).map((item, i) => {
              return (
                <li key={`item${i}`}>
                  {item}: &nbsp;{inventory[item]}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  }
}

export default Stats;
