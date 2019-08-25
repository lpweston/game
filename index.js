"use strict";
const inquirer = require("./node_modules/inquirer");
const data = require("./data");
const inventory = {};

const escapePodChoices = {
  type: "list",
  name: "choice",
  message: data.rooms.escapePod.description,
  choices: data.rooms.escapePod.choices
};

function escapePod() {
  inquirer.prompt(escapePodChoices).then(answer => {
    if (answer.choice === "Leave Room" && inventory.cuttingTorch) {
      console.log(data.rooms.escapePod.results["Leave Room B"]);
      outside();
    } else if (answer.choice === "Search supplies") {
      console.log(data.rooms.escapePod.results[answer.choice]);
      inventory.cuttingTorch = 1;
      escapePod();
    } else {
      console.log(data.rooms.escapePod.results[answer.choice]);
      escapePod();
    }
  });
}

function outside() {
  console.log("Well done you win!");
}

escapePod();
