exports.cargoBay1 = {
  name: "Cargo Bay 1",
  description:
    "A long, cavernous room. 5 large metal containers line the outher wall, clearly designed for long-term storage. At the far end of the room, away from the doors, lies a corpse.",
  options: {
    "Examine Container 1": {
      description:
        "The container is labelled in the alien language, and is locked.",
      translated:
        "The container is labelled 'Classified', and is locked. A keypad is labelled 'level 1 clearance'"
    },
    "Examine Container 2": {
      description:
        "The container is labelled in the alien language, and is locked.",
      translated:
        "The container is labelled 'Weapons', and is locked. A keypad is labelled 'level 2 clearance '"
    },
    "Examine Container 3": {
      description:
        "The container is labelled in the alien language. Inside, racks of boxes and large, sealed crates are secured to the walls. Each container is labelled, but you cannot read the language. It would take hours to search this container for useful supplies.",
      translated:
        "The container is labelled 'Emergency Repairs'. Inside, racks of boxes and large, sealed crates are secured to the walls. Each container is labelled according to its contents and the emergency conditions it should be used in. You quickly find a 'Breach Seal Kit'",
      items: { breachSealKit: 1 },
      once: true
    },
    "Examine Container 4": {
      description:
        "The container is labelled in the alien language. Inside, dozens of crates are stacked together, secured with magnetic clamps. The crates contain mechanical and electronic parts, whose function you do not understand. Each container is labelled, but you cannot read the language. You do not think that you will be able to use anything from this container.",
      translated:
        "The container is labelled 'Spare Parts'. Inside, dozens of crates are stacked together, secured with magnetic clamps. The crates contain mechanical and electronic parts, whose function you do not understand. Each container is labelled. You do not think that you will be able to use anything from this container."
    },
    "Examine Container 5": {
      description:
        "The container is labelled in the alien language. Inside, dozens of crates are stacked together, secured with magnetic clamps. The first crate you open contains tubes of strange liquids, boxes of soft, brightly coloured orbs, and red, fleshy chunks wrapped in clear plastic. Each item is labelled, but you cannot read the language.",
      translated:
        "The container is labelled 'Food'. Inside, dozens of crates are stacked together, secured with magnetic clamps. The first crate you open contains tubes of strange liquids, boxes of soft, brightly coloured orbs, and red, fleshy chunks wrapped in clear plastic. Each item is labelled, indicating that these substances provide nutrition for the crew of this spacecraft. Looking closer, you see that many of these foods would be toxic to you."
    },
    "Examine Corpse 1": {
      description:
        "A body lies slumped against the wall. You are not exactly sure what this creature looked like in life, but one of its many appendages appears to end in a bloody mess. As you draw near, you begin to hear a whistling sound, which grows to a low roar the closer you get. Looking around, you soon identify the source: a small breach in the hull, near the body. There is a matching hole in the opposite wall, leading to the interior of the ship. You suspect that whatever projectile did this damage, also killed the alien. Tentatively searching the corpse, you find some kind of key card held in their hand.",
      items: { idCard1: 1 },
      once: true
    },
    "Examine Corpse 2": {
      description: "The alien body lies slumped and unmoving."
    },
    "Seal Breach": {
      description:
        "(Temp, James please write this proper) There's a 1 inch breach in the hull, atmosphere is slowly leaking out.",
      requires: "breachSealKit",
      success:
        "You clamp the thin metal disk of the seal kit to the breach, and hit the activation button. Sparks fly as the patch welds itself to the surrounding wall, and the sound of escaping air abruptly fades. You hear a faint clunk, as the locking mechanism on the doors retract, in response to the rising air pressure.",
      items: { breach: -1 },
      once: true
    }
  },
  doors: {
    "Hanger 1": {
      location: "hanger1",
      status: "opened",
      opened: "You move into Hanger 1"
    },
    "Central Corridor Door": {
      location: "end",
      status: "closed",
      key: "breach",
      closed:
        "The hatch is sealed tight. A screen on the door displays a message, in unreadable alien text.",
      translated:
        "The hatch is sealed tight. A screen on the door displays the message: Hull Breach Detected. Atmosphere Loss Detected. Internal Bulkheads Locked.",
      open:
        "The hatch no longer displays the warning message, and swings open easily. You move into the corridor beyond.",
      opened: "You move into the Central Corridor"
    }
  }
};

exports.end = {
  name: "end",
  description: "You have reached the end of the Demo. Thank you for playing.",
  options: {},
  doors: {
    "Start Again?": {
      location: "prologue",
      status: "opened",
      opened: ""
    }
  }
};
