import React, { Component } from "react";

class Stats extends Component {
  render() {
    const { status } = this.props;
    return (
      <ul id="Stats" className="Area">
        <li>Health: {status.health}</li>
        <li>Location: {status.room}</li>
        <li>
          Items:
          <ul>
            {Object.keys(status.items).map((item, i) => {
              return (
                <li key={`item${i}`}>
                  {item}: &nbsp;{status.items[item]}
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
