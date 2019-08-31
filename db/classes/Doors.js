const { keys } = require("./data");
const { escapePod, hanger1, shuttle }

class Door {
  constructor(from, to, name) {
    this.name = name
    this.from = from;
    this.to = to;
    this.description = from[name].description;
    
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
    /* console.log(this.doors[choice].location);
        if (this.doors[choice].status === "opened") {
          console.log(this.doors[choice].opened);
          this.doors[choice].location.enterLocation();
        } else if (status.keys[this.doors[choice].key]) {
          console.log(this.doors[choice].open);
          hanger1.enterLocation();
        } else {
          console.log(this.doors[choice].closed);
          this.locationInteract();
        } */
  }
}

exports.EPtoHB = new Door(escapePod, hanger1, "Open Hatch");
exports.HBtoEP = new Door(hanger1, escapePod,);
exports.HBtoSH = new Door(hanger1, shuttle, "Shuttle Door");
exports.SHtoHB = new Door(shuttle, hanger1, "Door 1")
//exports.HBtoCC = new Door(hanger1, corridor, "Central Corridor Door");
//exports.CCtoHB = new Door(corridor, hanger1);
//exports.HBtoCB = new Door(hanger1, cargoBay, "Cargo Bay 1 Door");
//exports.CBtoHB = new Door(cargoBay, hanger1);