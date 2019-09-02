const { rooms } = require("./data");
const { Room } = require("./classes/Room");

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
