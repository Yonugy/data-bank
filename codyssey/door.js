const door = {
  town: [
    {
      to: "house1",
      position: {
        x1: 369,
        y1: 240,
        x2: 409,
        y2: 292,
      },
    },

    {
      to: "ownhouse",
      position: {
        x1: 117,
        y1: 234,
        x2: 157,
        y2: 286,
      },
    },
  ],

  house1: [
    {
      position: {
        x1: 384,
        y1: 832,
        x2: 443,
        y2: 895,
      },
    },
  ],

  ownhouse: [
    {
      // position: {
      //   x1: 192,
      //   y1: 320,
      //   x2: 239,
      //   y2: 335,
      // },
      position: {
        x1: 1024,
        y1: 1408,
        x2: 1087,
        y2: 1471,
      },
    },
  ],
};

module.exports = { door };
