const { rooms } = require("./data");

class Room {
  constructor(name, description, options, doors) {
    this.name = name;
    this.description = description;
    this.options = options;
    this.doors = doors;
    this.choices = [...Object.keys(options), ...Object.keys(doors), "status"];
  }
  openDoor(door) {
    if (door.status === "closed" && inventory.hasOwnProperty(door.key)) {
      console.log(door.open);
      door.status = "opened";
    } else if (door.status === "opened") {
      console.log(door.opened);
    } else {
      console.log(door.closed);
    }
  }
}

const escapePod = new Room(
  rooms.escapePod.name,
  rooms.escapePod.description,
  rooms.escapePod.options,
  rooms.escapePod.doors
);

//console.log(escapePod);

module.exports = { escapePod };
