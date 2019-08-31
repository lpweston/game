const { expect } = require("chai");
const { Room } = require("../db/classes/Rooms.js");
const { rooms } = require("../db/data/");
const { spy } = require("sinon");

describe("Room", () => {
  let escapePod;
  beforeEach(() => {
    escapePod = new Room(
      rooms["escapePodTemplate"].name,
      rooms["escapePodTemplate"].description,
      rooms["escapePodTemplate"].options,
      rooms["escapePodTemplate"].doors
    );
  });
  it("returns an object", () => {
    expect(escapePod).to.be.an("object");
  });
  it("object imports name, description, options, doors from database", () => {
    expect(escapePod).to.include.keys(
      "name",
      "description",
      "options",
      "doors"
    );
  });
  it("creates a property roomChoices, which contains choice array based on options, doors and status", () => {
    expect(escapePod.roomChoices.choices).to.include(
      ...Object.keys(rooms["escapePodTemplate"].options),
      ...Object.keys(rooms["escapePodTemplate"].doors),
      "status"
    );
  });
  it("contains a method enterRoom which logs the description then calls interactRoom", () => {
    const consoleSpy = expect(escapePod.enterRoom());
  });
});
