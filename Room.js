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
      if (this.doors.hasOwnProperty(choice)) {
        // choice is a door?
        this.openDoor(choice);
      } else if (this.options.hasOwnProperty(choice)) {
        // choice is an action?
        this.performAction(choice);
      } else {
        // must be status
        const status = require("./index");
        status.logStatus();
        this.interactRoom();
      }
    });
  }

  openDoor(choice) {
    const status = require("./index");
    const Rooms = require("./seed");
    choice = this.doors[choice];
    let nextRoom = Rooms[choice.location];
    if (choice.status === "closed" && status.items.hasOwnProperty(choice.key)) {
      status.items[choice.key] -= 1;
      console.log(`Removed ${choice.key}`);
      console.log(choice.open);
      choice.status = "opened";
      nextRoom.enterRoom();
    } else if (choice.status === "open") {
      console.log(choice.open);
      nextRoom.enterRoom();
    } else if (choice.status === "opened") {
      console.log(choice.opened);
      nextRoom.enterRoom();
    } else if (
      choice.status === "closed" &&
      status.items.hasOwnProperty("universalTranslator")
    ) {
      console.log(choice.translated);
      nextRoom.enterRoom();
    } else if (choice.status === "closed") {
      console.log(choice.closed);
      this.interactRoom();
    } else {
      console.log("door status issue...");
    }
  }

  performAction(choice) {
    const status = require("./index");
    choice = this.options[choice];
    if (
      status.items.hasOwnProperty("universalTranslator") &&
      choice.translated
    ) {
      console.log(choice.translated);
    } else {
      console.log(choice.description);
    }
    if (choice.items) {
      for (const key in choice.items) {
        if (status.items.hasOwnProperty(key)) {
          status.items[key] += 1;
        } else {
          status.items[key] = 1;
        }
        console.log(`Obtained ${key}`);
      }
    }
    this.interactRoom();
  }
}

module.exports = { Room };
