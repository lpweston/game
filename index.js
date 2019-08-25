"use strict";
const inquirer = require("./node_modules/inquirer");
const data = require("./data");
const inventory = {};

const escapePodChoices = {
  type: "list",
  name: "choice",
  message: "What would you like to do?",
  choices: Object.keys(data.rooms.escapePod.options)
};

function escapePodEnter() {
  console.log(data.rooms.escapePod.description);
  escapePod();
}

function escapePod() {
  inquirer.prompt(escapePodChoices).then(answer => {
    if (answer.choice === "Leave Room") {
      if (inventory.cuttingTorch) {
        console.log(data.rooms.escapePod.options["Leave Room"][1]);
        outside();
      } else {
        console.log(data.rooms.escapePod.options["Leave Room"][0]);
        escapePod();
      }
    } else if (answer.choice === "Search Supplies") {
      console.log(data.rooms.escapePod.options[answer.choice]);
      inventory.cuttingTorch = 1;
      inventory.medicalKit = 1;
      escapePod();
    } else {
      console.log(data.rooms.escapePod.options[answer.choice]);
      escapePod();
    }
  });
}

function outside() {
  console.log("Well done you win!");
}

escapePodEnter();
