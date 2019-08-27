const rooms = require("index.js");

exports.connector = {
  escapePod: {
    "Open Hatch": hanger1
  },
  hanger1: {
    "Central Corridor Door": corridor,
    "Cargo Bay 1 Door": cargoBay1,
    "Shuttle Door": shuttle,
    "Escape Pod": escapePod
  },
  shuttle: {
    "Door 1": hanger1
  }
};
