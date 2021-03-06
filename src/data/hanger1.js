exports.escapePod = {
  name: "Escape Pod",
  mapped: true,
  description:
    "Your escape pod contains crash couches and life support for five people, but you are the only occupant. There is a sealed escape hatch at one end of the pod, and a communications console at the other end. Survival equipment is secured to the walls, and a small porthole is built into the roof.",
  options: {
    "Send Standard Greeting": {
      description:
        "You activate the emergency subspace radio, but hear nothing but static. The equipment must have been damaged in the landing (or is being jammed...)"
    },
    "Search Supplies": {
      description:
        "The survival supplies are limited, but you do find a Medical Kit and a Cutting Torch.",
      items: { Medkit: 1, "Cutting Torch": 1 },
      once: true
    },
    "Look Out of Porthole": {
      description:
        "The porthole in the roof is diffult to access, but by standing on a crash couch you are able to get a look out of it. You see a grey metal roof, criss-crossed with structural supports. Alien symbols appear at regular intervals.",
      translated:
        "The porthole in the roof is diffult to access, but by standing on a crash couch you are able to get a look out of it. You see a grey metal roof, criss-crossed with structural supports. Warning labels appear at regular intervals, indicating that this hanger is designed to hold a maximum of three small craft."
    }
  },
  doors: {
    "Open Hatch": {
      location: "hanger1",
      status: "closed",
      key: "Cutting Torch",
      closed:
        "You try the escape hatch, which should open freely, only to find that it is jammed. On closer inspection, you see that the mechanism has fused from extreme heat, and will need to be cut open",
      open:
        "You fire up the torch and burn through the fused locking mechanism (using up the torch's limited fuel supply). The hatch swings open with a crash.",
      opened: "You leave through the hatch"
    }
  }
};

exports.hanger1 = {
  name: "Hanger 1",
  mapped: false,
  description:
    "Your escape pod is held in a hanger bay, which also contains some kind of small shuttlecraft. A set of closed spacedoors take up one long wall. There are two bulkhead doors leading out of the Hanger, each labelled with unfamiliar alien writing. Four lockers sit against the far wall.",
  options: {
    "Examine Shuttle": {
      description:
        "The shuttlecraft is larger than your escape pod, but not by much. It is sleek and aerodynamic, with bulky sublight engines flaring from the back. You suspect that it is a short range support craft, designed for planetary landings"
    },
    "Search Lockers": {
      description:
        "The lockers contain spacesuits, with limbs and bodily proportions strange and surprising to you. Whoever operates this ship does not resemble you in the slightest."
    }
  },
  doors: {
    "Central Corridor Door": {
      location: "centralCorridor",
      status: "closed",
      key: "repressurisedCC",
      closed:
        "The hatch is sealed tight. A screen on the door displays a message, in unreadable alien text.",
      translated:
        "The hatch is sealed tight. A screen on the door displays the message: Hull Breach Detected. Atmosphere Loss Detected. Internal Bulkheads Locked.",
      open:
        "The hatch no longer displays the warning message, and swings open easily. You move into the corridor beyond.",
      opened: "You move into the Central Corridor"
    },
    "Cargo Bay 1 Door": {
      location: "cargoBay1",
      status: "open",
      open:
        "The hatch is only partially closed, and the locking mechanisms have not enaged properly. After a moment's effort, the hatch creaks open and you pass through it.",
      opened: "You move into Cargo Bay 1"
    },
    "Shuttle Door": {
      location: "shuttle",
      status: "closed",
      key: "idCard1",
      closed:
        "The shuttle door appears locked. There is a console next to it, with a slot for a card of some kind.",
      open:
        "You insert the ID card into the slot, and the door slides smoothly open. You climb aboard the shuttle.",
      opened: "You climb aboard the shuttle"
    },
    "Escape Pod": {
      location: "escapePod",
      status: "opened",
      opened: "You climb into the escape pod"
    }
  }
};

exports.shuttle = {
  name: "Shuttle",
  mapped: false,
  description:
    "The inside of the shuttle is mostly taken up by storage lockers and seating. ",
  options: {
    "Launch Shuttle": {
      description:
        "The shuttle's main drive is not powered up, and it is too alien in design for you to bring it online yourself. You think that you could fly this ship if it had power, however."
    },
    "Search Lockers": {
      description:
        "You find a small plastic box labelled with alien script. You open the box, and see that it contains a metal disc. You take the disc out of the box. As soon as you touch it, your vision swims and the text on the box blurs, then sharpens again into perfect clarity. To your surprise, you can read the text perfectly. The box is labelled 'Universal Translator'. This will come in very handy, you think.",
      items: { universalTranslator: 1 },
      once: true
    }
  },
  doors: {
    "Door 1": {
      location: "hanger1",
      status: "opened",
      opened: "You climb out of the shuttle"
    }
  }
};
