exports.Template = {
  name: "text",
  description: "Text",
  options: {
    "Option 1": {
      // need description, defualt text
      description: "text",
      // translated is optional, text will be instead of description when universal tanslater is present
      translated: "text2",
      // requires and success are optional, but must come as a pair, requires is an item, and success is the text that will appear if item is in inventory, this will show in preference to translated.
      requires: "anItem",
      success: "if have item this",
      // optional, items can be + or - and will change the inventory. if requirement, it will only happen on a success.
      items: { key1: 1 },
      // optional, once it is triggered once will delete, this is useful for preventing multiple items. if set with translated and/or requires it will only trigger after that message is shown.
      once: true
    }
  },
  doors: {
    "Door 1": {
      location: "hanger1",
      status: "closed",
      key: "Key",
      closed: "Text",
      open: "Text",
      opened: "Text"
    }
  }
};
