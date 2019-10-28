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
          <h3>{room.name}:</h3>
          <p> {room.description}</p> <hr />
          {message.length > 0 && (
            <div>
              <h3>Result:</h3>
              <p>{message}</p>
            </div>
          )}
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
    const haveKey =
      door.status === "closed" && inventory.hasOwnProperty(door.key);
    const trans =
      door.translated && inventory.hasOwnProperty("universalTranslator");
    if (haveKey) {
      console.log("inhere");
      items = { [door.key]: -1 };
      door.status = "opened";
      message = door.open;
      room = door.location;
    } else if (door.status === "open") {
      door.status = "opened";
      message = door.open;
      room = door.location;
    } else if (door.status === "opened") {
      message = door.opened;
      room = door.location;
    } else if (door.status === "closed") {
      if (trans) {
        message = door.translated;
      } else {
        message = door.closed;
      }
    }
    changeStatus({ room, message, items });
  };
  interactOption = e => {
    const { changeStatus, inventory } = this.props;
    const option = this.state.room.options[e.target.value];
    let items, message, trans, req, del;
    trans =
      option.translated && inventory.hasOwnProperty("universalTranslator");
    req = option.requires && inventory.hasOwnProperty(option.requires);
    del = option.once;
    if (trans) message = option.translated;
    else if (req) message = option.success;
    else message = option.description;
    if (option.items) {
      if (!option.requires || req) items = option.items;
    }
    if (option.once) {
      if (option.requires && !req) del = false;
      if (option.translated && !trans) del = false;
      if (del) {
        delete this.state.room.options[e.target.value];
      }
    }
    changeStatus({ message, items });
  };
}

export default Text;
