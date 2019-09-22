import React, { Component } from "react";
import rooms from "../data/rooms";

class Text extends Component {
  state = {
    rooms,
    message: this.props.message,
    room: rooms[this.props.room]
  };
  render() {
    const { message, room } = this.state;
    return (
      <div id="control" className="Area">
        <div id="Text">
          <p> {room.description}</p> <hr />
          {message.length > 0 && <p>{message}</p>}
          <hr />
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
              <button
                onClick={this.interactOption}
                key={`options${i}`}
                value={option}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    if (
      prevProps.room !== this.props.room ||
      prevProps.message !== this.props.message
    ) {
      this.setState({
        message: this.props.message,
        room: rooms[this.props.room]
      });
    }
  };

  interactDoor = e => {
    const door = this.state.room.doors[e.target.value];
    const { changeStatus, inventory } = this.props;
    let room, message;
    if (door.status === "closed" && inventory.hasOwnProperty(door.key)) {
      console.log("got the key");
    } else if (door.status === "closed") {
      message = door.closed;
    } else if (door.status === "opened") {
      room = door.location;
      message = door.opened;
    }
    changeStatus({ room, message });
  };
  interactOption = e => {
    const { changeStatus } = this.props;
    const option = this.state.room.options[e.target.value];
    const message = option.description;
    let items;
    if (option.items) {
      items = option.items;
    }
    changeStatus({ message, items });
  };
}

export default Text;
