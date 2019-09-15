import React, { Component } from "react";
import rooms from "../data/rooms";

class Text extends Component {
  state = { rooms };
  render() {
    const { room } = this.props.status;
    const { changeRoom } = this.props;
    return (
      <div id="control" className="Area">
        <div id="Text">
          <p> {rooms[room].description}</p>
        </div>
        <div id="choices">
          {Object.keys(rooms[room].doors).map((door, i) => {
            const newLocation = rooms[room].doors[door].location;
            return (
              <button
                onClick={changeRoom}
                key={`choice${i}`}
                value={newLocation}
              >
                {door}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Text;
