const { escapePod, hanger1, shuttle } = require("./db/seed");
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
