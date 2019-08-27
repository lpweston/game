exports.Template = {
  name: "text",
  description: "Text",
  options: {
    "Option 1": {
      description: "text",
      keys: { key1: "+1" }
    }
  },
  doors: {
    "Door 1": {
      status: "closed",
      key: "Key",
      closed: "Text",
      open: "Text",
      opened: "Text"
    }
  }
};

exports.escapePodTemplate = {
  name: "escapePod",
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
      keys: { medkit: 1, cuttingTorch: 1 }
    },
    "Look Out of Porthole": {
      description:
        "The porthole in the roof is diffult to access, but by standing on a crash couch you are able to get a look out of it. You see a grey metal roof, criss-crossed with structural supports. Alien symbols appear at regular intervals."
    }
  },
  doors: {
    "Open Hatch": {
      status: "closed",
      key: "cuttingTorch",
      closed:
        "You try the escape hatch, which should open freely, only to find that it is jammed. On closer inspection, you see that the mechanism has fused from extreme heat, and will need to be cut open",
      open:
        "You fire up the torch and burn through the fused locking mechanism (using up the torch's limited fuel supply). The hatch swings open with a crash.",
      keys: { cuttingTorch: -1 },
      opened: "You leave through the hatch"
    }
  }
};

exports.hanger1Template = {
  name: "Hanger 1",
  description:
    "Your escape pod is held in a hanger bay, which also contains some kind of small shuttlecraft. A set of closed spacedoors take up one long wall. There are two bulkhead doors leading out of the Hanger, each labelled with unfamiliar alien writing. Four lockers sit against the far wall.",
  options: {
    "Examine Shuttle": {
      description:
        "The shuttlecraft is larger than your escape pod, but not by much. It is sleek and aerodynamic, with bulky sublight engines flaring from the back. You suspect that it is a short range support craft, designed for planetary landings"
    },
    "Read Alien Text": {
      description:
        "The crude and angular characters above the doors are not from a language that you understand. You guess that the text refers to the rooms beyond the two doors, though whether merely a name or some kind of warning, you cannot tell."
    },
    "Search Lockers": {
      description:
        "The lockers contain spacesuits, with limbs and bodily proportions strange and surprising to you. Whoever operates this ship does not resemble you in the slightest. One of the spacesuits has a pouch on the front which contains an ID card, which you take.",
      keys: { idCard1: 1 }
    }
  },
  doors: {
    "Central Corridor Door": {
      status: "closed",
      key: "repressurisedCC",
      closed:
        "The hatch is sealed tight. The mechanism appears to be designed to stop the door opening into vacuum.",
      open:
        "The hatch swings open easily, now that the corridor beyond is pressurised. You move into the corridor beyond.",
      opened: "You move into the Central Corridor"
    },
    "Cargo Bay 1 Door": {
      status: "closed",
      open:
        "After a moment's effort, the hatch creaks open and you pass through it.",
      opened: "You move into Cargo Bay 1"
    },
    "Shuttle Door": {
      status: "closed",
      key: "idCard1",
      closed:
        "The shuttle door appears locked. There is a console next to it, with a slot for a card of some kind.",
      open:
        "You insert the ID card into the slot, and the door slides smootly open. You climb aboard the shuttle.",
      opened: "You climb aboard the shuttle"
    },
    "Escape Pod": {
      status: "opened",
      opened: "You climb in the escape pod"
    }
  }
};

exports.shuttleTemplate = {
  name: "Shuttle",
  description:
    "The inside of the shuttle is mostly taken up by storage lockers and seating. ",
  options: {
    "Launch Shuttle": {
      description:
        "The shuttle's main drive is not powered up, and it is too alien in design for you to bring it online yourself. You think that you could fly this ship if it had power, however."
    },
    "Search Lockers": {
      description:
        "You find a small plastic box labelled with alien script. You open the box, and see that it contains a metal disc. You take the disc out of the box, and while holding it, the text seems suddenly clear and understandable to you. Looking at the box, you see that it is labelled 'Universal Translator'. This will come in very handy, you think. (+1 Universal Translator)."
    },
    "Option 3": {
      description: "Text"
    }
  },
  doors: {
    "Door 1": {
      status: "open",
      opened: "You climb out of the shuttle"
    }
  }
};
