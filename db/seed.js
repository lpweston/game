const { rooms } = require("../db/data/");
const { Room } = require("./classes/Rooms");

function createRoom(room) {
  return new Room(
    rooms[room].name,
    rooms[room].description,
    rooms[room].options,
    rooms[room].doors
  );
}

exports.escapePod = createRoom("escapePodTemplate");
exports.hanger1 = createRoom("hanger1Template");
exports.shuttle = createRoom("shuttleTemplate");
