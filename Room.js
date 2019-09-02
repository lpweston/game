const inquirer = require("inquirer");

class Room {
  constructor(name, description, options, doors) {
    this.name = name;
    this.description = description;
    this.options = options;
    this.doors = doors;
    this.roomChoices = {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [...Object.keys(options), ...Object.keys(doors), "status"]
    };
  }

  enterRoom() {
    console.log(this.description);
    this.interactRoom();
  }

  interactRoom() {
    inquirer.prompt(this.roomChoices).then(({ choice }) => {
      //is choice a door?
      if (this.doors.hasOwnProperty(choice)) {
        this.openDoor(choice);
        //is choice an option?
      } else if (this.options.hasOwnProperty(choice)) {
        console.log(this.options[choice].description);
        if (this.options[choice].keys) {
          const status = require("./index");
          for (const key in this.options[choice].keys) {
            if (status.items.hasOwnProperty(key)) {
              status.items[key] += 1;
            } else {
              status.items[key] = 1;
            }
            console.log(`Obtained ${key}`);
          }
        }
        this.interactRoom();
      } else {
        const status = require("./index");
        status.logStatus();
        this.interactRoom();
      }
    });
  }

  openDoor(choice) {
    const status = require("./index");
    const Rooms = require("./seed");
    let nextRoom = Rooms[this.doors[choice].location];
    if (
      this.doors[choice].status === "closed" &&
      status.items.hasOwnProperty(this.doors[choice].key)
    ) {
      status.items[this.doors[choice].key] -= 1;
      console.log(`Removed ${this.doors[choice].key}`);
      console.log(this.doors[choice].open);
      this.doors[choice].status = "opened";
      nextRoom.enterRoom();
    } else if (this.doors[choice].status === "opened") {
      console.log(this.doors[choice].opened);
      nextRoom.enterRoom();
    } else {
      console.log(this.doors[choice].closed);
      this.interactRoom();
    }
  }
}

module.exports = { Room };
