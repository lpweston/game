exports.Template = {
  name: "text",
  description: "Text",
  options: {
    "Option 1": {
      description: "text",
      translated: "text2",
      items: { key1: 1 },
      once: false
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
