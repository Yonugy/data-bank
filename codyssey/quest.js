const quest = {
  init: "quest1",

  quest1: {
    startquest: "quest1intro",
    subquest: {
      quest1intro: {
        title: "a",
        location: "town",
        criteria: ["end_quest1_intro"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
        nextsubquest: "quest1start",
      },

      quest1start: {
        title: "b",
        location: "town",
        criteria: ["done_shit_to_toilet"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
      },
    },
    nextquest: "quest2",
  },

  quest2: {
    startquest: "quest2intro",
    subquest: {
      quest2intro: {
        title: "c",
        location: "town",
        criteria: ["end_quest2_intro"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
        nextsubquest: "quest2start",
      },

      quest2start: {
        title: "d",
        location: "town",
        criteria: ["done_trash_to_cat"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
      },
    },
    nextquest: "quest3",
  },

  quest3: {
    startquest: "quest3intro",
    subquest: {
      quest3intro: {
        title: "e",
        location: "town",
        criteria: ["end_quest3_intro"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
        nextsubquest: "quest3start",
      },

      quest3start:{
        title: "Intro to Beh House",
        location: "house1",
        npc: {
          bin: { position: { x: 390, y: 400 } },
          samurai: { position: { x: 500, y: 500 } },
        },
      }
    },
  },
};

module.exports = { quest };
