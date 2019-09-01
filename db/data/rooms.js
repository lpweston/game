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
    "Look Out of Porthole (Translator)": {
      description:
        "The porthole in the roof is diffult to access, but by standing on a crash couch you are able to get a look out of it. You see a grey metal roof, criss-crossed with structural supports. Warning labels appear at regular intervals, indicating that this hanger is designed to hold a maximum of three small craft."
    }
  },
  doors: {
    "Open Hatch": {
      location: "hanger1",
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
    "Search Lockers": {
      description:
        "The lockers contain spacesuits, with limbs and bodily proportions strange and surprising to you. Whoever operates this ship does not resemble you in the slightest.",
    }
  },
  doors: {
    "Central Corridor Door": {
      location: "centralCorridor",
      status: "closed",
      key: "repressurisedCC",
      closed:
        "The hatch is sealed tight. A screen on the door displays a message, in unreadable alien text.",
      closedTranslator:
      "The hatch is sealed tight. A screen on the door displays the message: Hull Breach Detected. Atmosphere Loss Detected. Internal Bulkheads Locked."
      open:
        "The hatch no longer displays the warning message, and swings open easily. You move into the corridor beyond.",
      opened: "You move into the Central Corridor"
    },
    "Cargo Bay 1 Door": {
      location: "cargoBay1",
      status: "closed",
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
        "You find a small plastic box labelled with alien script. You open the box, and see that it contains a metal disc. You take the disc out of the box. As soon as you touch it, your vision swims and the text on the box blurs, then sharpens again into perfect clarity. To your surprise, you can read the text perfectly. The box is labelled 'Universal Translator'. This will come in very handy, you think.",
      keys: { universalTranslator: 1 }
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

exports.cargoBay1Template = {
  name: "Cargo Bay 1",
  description: "A long, cavernous room. 5 large metal containers line the outher wall, clearly designed for long-term storage. At the far end of the room, away from the doors, lies a corpse.",
  options: {
    "Examine Container 1": {
      description: "The container is labelled in the alien language, and is locked.",
    }
    "Examine Container 1 (Translator)": {
      description: "The container is labelled 'Classified', and is locked. A keypad is labelled 'level 1 clearance'",
    }
      "Examine Container 2": {
      description: "The container is labelled in the alien language, and is locked.",
    }
    "Examine Container 2 (Translator)": {
      description: "The container is labelled 'Weapons', and is locked. A keypad is labelled 'level 2 clearance '",
    }
          "Examine Container 3": {
      description: "The container is labelled in the alien language. Inside, racks of boxes and large, sealed crates are secured to the walls. Each container is labelled, but you cannot read the language. It would take hours to search this container for useful supplies.",
    }
    "Examine Container 3 (Translator)": {
      description: "The container is labelled 'Emergency Repairs'. Inside, racks of boxes and large, sealed crates are secured to the walls. Each container is labelled according to its contents and the emergency conditions it should be used in. You quickly find a 'Breach Seal Kit'",
        item: { breachSealKit: 1 }
    }
              "Examine Container 4": {
      description: "The container is labelled in the alien language. Inside, dozens of crates are stacked together, secured with magnetic clamps. The crates contain mechanical and electronic parts, whose function you do not understand. Each container is labelled, but you cannot read the language. You do not think that you will be able to use anything from this container.",
    }
    "Examine Container 4 (Translator)": {
      description: "The container is labelled 'Spare Parts'. Inside, dozens of crates are stacked together, secured with magnetic clamps. The crates contain mechanical and electronic parts, whose function you do not understand. Each container is labelled. You do not think that you will be able to use anything from this container.",
    }
            "Examine Container 5": {
      description: "The container is labelled in the alien language. Inside, dozens of crates are stacked together, secured with magnetic clamps. The first crate you open contains tubes of strange liquids, boxes of soft, brightly coloured orbs, and red, fleshy chunks wrapped in clear plastic. Each item is labelled, but you cannot read the language.",
    }
    "Examine Container 5 (Translator)": {
      description: "The container is labelled 'Food'. Inside, dozens of crates are stacked together, secured with magnetic clamps. The first crate you open contains tubes of strange liquids, boxes of soft, brightly coloured orbs, and red, fleshy chunks wrapped in clear plastic. Each item is labelled, indicating that these substances provide nutrition for the crew of this spacecraft. Looking closer, you see that many of these foods would be toxic to you.",
    }
"Examine Corpse 1: {
      description: "A body lies slumped against the wall. You are not exactly sure what this creature looked like in life, but one of its many appendages appears to end in a bloody mess. As you draw near, you begin to hear a whistling sound, which grows to a low roar the closer you get. Looking around, you soon identify the source: a small breach in the hull, near the body. There is a matching hole in the opposite wall, leading to the interior of the ship. You suspect that whatever projectile did this damage, also killed the alien. Tentatively searching the corpse, you find some kind of key card held in their hand.",
      keys: { idCard1: "+1" }
    }
              "Examine Corpse 2: {
      description: "The alien body lies slumped and unmoving.",
    }
      "Seal Breach (Needs breachSealKit): {
      description: "You clamp the thin metal disk of the seal kit to the breach, and hit the activation button. Sparks fly as the patch welds itself to the surrounding wall, and the sound of escaping air abruptly fades. You hear a faint clunk, as the locking mechanism on the doors retract, in response to the rising air pressure.",
      keys: { idCard1: "+1" }
    }
  },
  doors: {
    "Hanger 1": {
      status: "open",
      closed: "Text",
      open: "You move into Hanger 1",
      opened: "You move into Hanger 1"
    }
    {
    "Central Corridor Door": {
      location: "centralCorridor",
      status: "closed",
      key: "repressurisedCC",
      closed:
        "The hatch is sealed tight. A screen on the door displays a message, in unreadable alien text.",
      closedTranslator:
      "The hatch is sealed tight. A screen on the door displays the message: Hull Breach Detected. Atmosphere Loss Detected. Internal Bulkheads Locked."
      open:
        "The hatch no longer displays the warning message, and swings open easily. You move into the corridor beyond.",
      opened: "You move into the Central Corridor"
    }
  }
};
