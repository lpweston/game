"use strict";
const inquirer = require("./node_modules/inquirer");
//const { rooms } = require("./data");
const { escapePod } = require("./classes");
const inventory = {};

const escapePodChoices = {
  type: "list",
  name: "choice",
  message: "What would you like to do?",
  choices: escapePod.choices
};

function escapePodEnter() {
  console.log(escapePod.description);
  escapePodRoom();
}

function escapePodRoom() {
  inquirer.prompt(escapePodChoices).then(answer => {
    if (answer.choice === "Open Hatch") {
      if (inventory.cuttingTorch) {
        console.log(escapePod.doors[answer.choice].open);
        outside();
      } else {
        console.log(escapePod.doors[answer.choice].closed);
        escapePodRoom();
      }
    } else if (answer.choice === "Search Supplies") {
      console.log(escapePod.options[answer.choice]);
      inventory.cuttingTorch = 1;
      inventory.medicalKit = 1;
      escapePodRoom();
    } else {
      console.log(escapePod.options[answer.choice]);
      escapePodRoom();
    }
  });
}

function outside() {
  console.log("Well done you win!");
}

escapePodEnter();
