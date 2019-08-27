const { roomTemplates, keys, roomConnector } = require("./data");
const inquirer = require("inquirer");
const status = require("./index");

class Room {
  constructor(name, description, options, doors) {
    this.name = name;
    this.description = description;
    this.options = options;
    this.doors = doors;
    this.locationChoices = {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [...Object.keys(options), ...Object.keys(doors), "status"]
    };
  }

  connectRooms() {
    for (const door in this.doors) {
      console.log(this);
      this.doors[door].connectsTo = roomConnector[this.name][door];
    }
  }

  enterLocation() {
    console.log(this.description);
    this.locationInteract();
  }

  locationInteract() {
    inquirer.prompt(this.locationChoices).then(({ choice }) => {
      //is choice a door?
      if (this.doors.hasOwnProperty(choice)) {
        console.log(this.doors[choice].location);
        if (this.doors[choice].status === "opened") {
          console.log(this.doors[choice].opened);
          this.doors[choice].location.enterLocation();
        } else if (status.keys[this.doors[choice].key]) {
          console.log(this.doors[choice].open);
          hanger1.enterLocation();
        } else {
          console.log(this.doors[choice].closed);
          this.locationInteract();
        }
        //is choice an option?
      } else if (this.options.hasOwnProperty(choice)) {
        console.log(this.options[choice].description);
        if (this.options[choice].keys) {
          for (const key in this.options[choice].keys) {
            status.keys[key] += 1;
          }
        }
        this.locationInteract();
      } else {
        console.log(status);
        this.locationInteract();
      }
    });
  }

  openDoor(door) {
    if (door.status === "closed" && keys.hasOwnProperty(door.key)) {
      console.log(door.open);
      door.status = "opened";
    } else if (door.status === "opened") {
      console.log(door.opened);
    } else {
      console.log(door.closed);
    }
  }
}

function createRoom(room) {
  return new Room(
    roomTemplates[room].name,
    roomTemplates[room].description,
    roomTemplates[room].options,
    roomTemplates[room].doors
  );
}

exports.escapePod = createRoom("escapePodTemplate");
exports.hanger1 = createRoom("hanger1Template");
exports.shuttle = createRoom("shuttleTemplate");
