const { escapePod } = require("./seed");
const { boxText } = require("./data");

const status = {
  health: "Ok",
  items: {},
  logStatus: function logStatus() {
    const items = [...Object.keys(status.items)].filter(item => {
      return status.items[item] > 0;
    });
    console.log("Health:", status.health);
    console.log("Items:", items);
  }
};
function start() {
  console.log(boxText.prologue);
  escapePod.enterRoom();
}

start();

module.exports = status;
