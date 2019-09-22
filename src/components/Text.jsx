import React, { Component } from "react";
import rooms from "../data/rooms";

class Text extends Component {
  state = {
    rooms,
    message: this.props.status.message,
    room: rooms[this.props.status.room]
  };
  render() {
    const { message, room } = this.state;
    return (
      <div id="control" className="Area">
        <div id="Text">
          {message.length > 0 && <p>{message}</p>}
          <p> {room.description}</p> <hr />
          <div id="choices"></div>
          {Object.keys(room.doors).map((door, i) => {
            return (
              <button
                onClick={this.interactDoor}
                key={`doors${i}`}
                value={door}
              >
                {door}
              </button>
            );
          })}
          {Object.keys(room.options).map((option, i) => {
            return (
              <button onClick={this.interactOption} key={`options${i}`}>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    if (prevProps.status.room !== this.props.status.room) {
      this.setState({
        message: this.props.status.message,
        room: rooms[this.props.status.room]
      });
    }
  };

  interactDoor = e => {
    const door = this.state.room.doors[e.target.value];
    const { changeRoom } = this.props;
    const newLocation = door.location;
    const newMessage = door.open || "";
    changeRoom(newLocation, newMessage);
  };
  interactOption = e => {
    console.log("choice");
  };
}

export default Text;
