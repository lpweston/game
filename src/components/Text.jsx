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
    let room, message, items;
    if (door.status === "closed" && inventory.hasOwnProperty(door.key)) {
      items = { [door.key]: -1 };
      door.status = "opened";
      message = door.open;
      room = door.location;
    } else if (door.status === "open") {
      door.status = "opened";
      message = door.open;
      room = door.location;
    } else if (door.status === "closed") {
      if (door.translated && inventory.hasOwnProperty("universalTranslator")) {
        message = door.translated;
      } else {
        message = door.closed;
      }
    } else if (door.status === "opened") {
      message = door.opened;
      room = door.location;
    }
    changeStatus({ room, message, items });
  };
  interactOption = e => {
    const { changeStatus, inventory } = this.props;
    const option = this.state.room.options[e.target.value];
    let items, message;
    if (option.translated && inventory.hasOwnProperty("universalTranslator")) {
      message = option.translated;
    } else {
      message = option.description;
    }
    if (option.items) {
      if (!option.requires || inventory.hasOwnProperty(option.requires)) {
        items = option.items;
      }
    }
    if (option.once) {
      delete this.state.room.options[e.target.value];
    }
    changeStatus({ message, items });
  };
}

export default Text;
