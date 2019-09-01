const { escapePod, hanger1, shuttle } = require("./db/seed");
const { keys, boxText } = require("./db/data");
const status = {
  location: escapePod,
  keys: {}
};

function start() {
  console.log(boxText.prologue);
  escapePod.enterRoom();
}

start();

module.exports = status;
