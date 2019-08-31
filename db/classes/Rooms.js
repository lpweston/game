const inquirer = require("inquirer");
//const status = require("../../index");

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
    return "";
    //inquirer.prompt(this.roomChoices).then(({ choice }) => {
    /*
      //is choice a door?
      if (this.doors.hasOwnProperty(choice)) {
        choice.openDoor();
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
      }*/
    //});
  }
}

module.exports = { Room };
