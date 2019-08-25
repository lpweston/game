exports.escapePod = {
  description:
    "Your escape pod contains crash couches and life support for five people, but you are the only occupant. There is a sealed escape hatch at one end of the pod, and a communications console at the other end. Survival equipment is secured to the walls, and a small porthole is built into the roof.",
  choices: [
    "Leave Room",
    "Send Distress Signal",
    "Search Supplies",
    "Look Out of Porthole"
  ],
  results: {
    "Leave Room":
      "You try the escape hatch, which should open freely, only to find that it is jammed. On closer inspection, you see that the mechanism has fused from extreme heat, and will need to be cut open",
    "Leave Room B":
      "You fire up the torch and burn through the fused locking mechanism (using up the torch's limited fuel supply). The hatch swings open with a crash. (-1 Cutting Torch)",
    "Send Distress Signal":
      "You activate the emergency subspace radio, but hear nothing but static. The equipment must have been damaged in the crash (or is being jammed...)",
    "Search Supplies":
      "The survival supplies are limited, but you do find a Medical Kit and a Cutting Torch (+1 Medkit, +1 Cutting Torch)",
    "Look Out of Porthole":
      "The porthole in the roof is diffult to access, but by standing on a crash couch you are able to get a look out of it. You see (LANDSCAPE TBD)"
  }
};
