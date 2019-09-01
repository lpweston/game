const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const { Room } = require("../db/classes/Room");
const { rooms } = require("../db/data/");

describe("Room", () => {
  let escapePod, hanger1;
  beforeEach(() => {
    escapePod = new Room(
      rooms["escapePodTemplate"].name,
      rooms["escapePodTemplate"].description,
      rooms["escapePodTemplate"].options,
      rooms["escapePodTemplate"].doors
    );
    hanger1 = new Room(
      rooms["hanger1Template"].name,
      rooms["hanger1Template"].description,
      rooms["hanger1Template"].options,
      rooms["hanger1Template"].doors
    );
    sinon.spy(console, "log");
  });
  afterEach(function() {
    console.log.restore();
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
  xit("contains a method enterRoom which logs the description then calls interactRoom", () => {
    escapePod.enterRoom();
    expect(console.log).to.have.been.called;
    expect(console.log).to.have.been.calledWith(escapePod.description);
  });
  xit("Rooms has function prepareDoors, which when called after Rooms are ready will add property to Room of where the door leads", () => {
    escapePod.enterRoom();
  });
  it("has method open door, which when called with a door moves to that location", () => {
    escapePod.openDoor("Open Hatch");
  });
});
