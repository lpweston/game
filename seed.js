const { rooms } = require("./data");
const { Room } = require("./Room");

function createRoom(room) {
  return new Room(
    rooms[room].name,
    rooms[room].description,
    rooms[room].options,
    rooms[room].doors
  );
}

for (const room in rooms) {
  exports[room] = createRoom(room);
}
