const quest = {
  init:"quest1",

  quest1: {
    startquest:"quest1intro",
    subquest: {
      quest1intro: {
        title: "a",
        criteria:["end_quest1_intro"],
        nextsubquest:"quest1start"
      },

      quest1start: {
        title: "b",
        criteria:["done_shit_to_toilet"],
      },
    },

    nextquest:"quest2"
  },

  quest2: {
    startquest:"quest2intro",
    subquest: {
      quest2intro: {
        title: "c",
        criteria:["end_quest2_intro"],
        nextsubquest:"quest2start"
      },

      quest2start: {
        title: "d",
        criteria:["done_trash_to_cat"],
      },
    },
    nextquest:"quest3"
  },

  quest3: {
    startquest: "quest3intro",
    subquest: {
      quest3intro:{
        title: "e",
      }
    }
  }
};

module.exports = { quest };
