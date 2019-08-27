const { roomTemplates, boxText } = require("./data");
const inquirer = require("inquirer");
const status = {
  location: "escapePod",
  inventory: {}
};

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

  enterLocation() {
    console.log(this.description);
    this.locationInteract();
  }

  locationInteract() {
    inquirer.prompt(this.locationChoices).then(answer => {
      if (this.doors.hasOwnProperty(answer.choice)) {
        console.log(this.doors[answer.choice].location);
        if (this.doors[answer.choice].status === "opened") {
          console.log(this.doors[answer.choice].opened);
          this.doors[answer.choice].location.enterLocation();
        } else if (status.inventory[this.doors[answer.choice].key]) {
          console.log(this.doors[answer.choice].open);
          hanger1.enterLocation();
        } else {
          console.log(this.doors[answer.choice].closed);
          this.locationInteract();
        }
      } else if (this.options.hasOwnProperty(answer.choice)) {
        console.log(this.options[answer.choice]);
        //sort out invetory
        status.inventory.cuttingTorch = 1;
        status.inventory.medicalKit = 1;
        this.locationInteract();
      } else {
        //impliment status
        console.log("status not coded yet");
        this.locationInteract();
      }
    });
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

function createRoom(room) {
  return new Room(
    roomTemplates[room].name,
    roomTemplates[room].description,
    roomTemplates[room].options,
    roomTemplates[room].doors
  );
}
const escapePod = createRoom("escapePodTemplate");
const hanger1 = createRoom("hanger1Template");
const shuttle = createRoom("shuttleTemplate");
const rooms = { escapePod, hanger1, shuttle };

function start() {
  console.log(boxText.prologue);
  escapePod.enterLocation();
}

function outside() {
  console.log("Well done you win!");
}

start();

module.exports = { status, rooms };
