const { escapePod } = require("./db/seed");
const { boxText } = require("./db/data");
const status = {
  keys: {}
};

function start() {
  console.log(boxText.prologue);
  escapePod.enterRoom();
}

start();

module.exports = status;
