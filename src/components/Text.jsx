import React, { Component } from "react";
import rooms from "../data/rooms";

class Text extends Component {
  state = { rooms };
  render() {
    const { room, message } = this.props.status;
    const { changeRoom } = this.props;
    return (
      <div id="control" className="Area">
        <div id="Text">
          {message.length > 0 && <p>{message}</p>}
          <p> {rooms[room].description}</p> <hr />
          <div id="choices"></div>
          {Object.keys(rooms[room].doors).map((door, i) => {
            const newLocation = rooms[room].doors[door].location;
            const newMessage = rooms[room].doors[door].open || "";
            return (
              <button
                onClick={() => {
                  changeRoom(newLocation, newMessage);
                }}
                key={`doors${i}`}
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
