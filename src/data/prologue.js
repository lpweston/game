exports.prologue = {
  name: "Prologue",
  description:
    "Your months-long mission was nearly over, and you and your crew were all looking forward to returning home. Just one more planet to survey, and it would all be over. From your station at the sensor grid, you waitied for the away team to gather their samples, impatiently drumming a rythm against the console. Maybe it was just last-mission nerves, but you felt impatient and anxious, and you could tell you weren't the only one. Finally, they announced that they were returning, and you shared a relieved look with the Captain. ",
  options: {},
  doors: {
    continue: {
      location: "prologue2",
      status: "opened",
      opened: ""
    }
  }
};

exports.prologue2 = {
  name: "Prologue",
  description:
    "You watched their life signs approach the landing site, but your relief turned to horror as you saw that they weren't alone. A large, fast bio-reading appeared, and almost as soon as you saw it it had reached the away team. Their lifesigns blinked out, one by one, as you watched, stunned. You barely heard the Captain order the takeoff. By the time you regained your wits, the sound of the engines firing filled the ship. But even beyond that deafening roar, you heard the wrenching of tortured metal and felt the heavy thud of something tearing its way onto the ship.",
  options: {},
  doors: {
    continue: {
      location: "prologue3",
      status: "opened",
      opened: ""
    }
  }
};

exports.prologue3 = {
  name: "Prologue",
  description:
    "You never saw it, but by the time you made it to the escape pod you knew you were the last left alive. You slammed the hatch and fired the boosters, feeling even as you did the scrape of claws against the pod's hull. For a second you feared the hull would breach, but then you were free, drifting in space, safe. You could see your ship through the porthole, growing slowly smaller, and for a moment you could swear that you saw a dark shape moving along the hull. Whatever it was, it was trapped there, and couldn't reach you anymore.",
  options: {},
  doors: {
    continue: {
      location: "prologue4",
      status: "opened",
      opened: ""
    }
  }
};

exports.prologue4 = {
  name: "Prologue",
  description:
    "You drifted for what felt like days, though you couldn't be sure. You sent out a standard distresss signal, and waited. Finally, with no warning, you felt the pod slow and change course, hearing the unmistakeable hum of a tractor beam. Rescue! The pod clanked and groaned, then settled to a stop. You felt gravity for the first time since your escape (a little heavier than what you were used to, but comfortable enough).You stand, and prepare to leave.",
  options: {},
  doors: {
    continue: {
      location: "escapePod",
      status: "opened",
      opened: ""
    }
  }
};
