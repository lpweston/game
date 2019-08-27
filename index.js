const { escapePod, hanger1, shuttle } = require("./prepareRooms");
const { keys, boxText } = require("./data");
const status = {
  location: escapePod,
  keys
};

function start() {
  console.log(boxText.prologue);
  escapePod.enterLocation();
}

start();

module.exports(status);
