const quest = {
  init: "quest1", //need change back to quest 1 after testing

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
        nextsubquest: "quest3point1",
      },

      quest3point1:{
        title: "Intro to Beh House",
        location: "house1",
        criteria: ["end_quest3_point_1"],
        npc: {
          bin: { position: { x: 350, y: 350 } },
          samurai: { position: { x: 800, y: 225 } },
        },
        nextsubquest: "quest3start",
      },

      quest3start:{
        title: "Intro to Samurai",
        location: "house1",
        criteria: ["end_quest3_start"],
        npc: {
          bin: { position: { x: 350, y: 350 } },
          samurai: { position: { x: 800, y: 225 } },
        },
      }
    },
    nextquest: "quest4",
  },

  quest4: {
    startquest: "quest4intro",
    subquest: {
      quest4intro: {
        title: "Back to Town",
        location: "town",
        criteria: ["end_quest4_intro"],
        npc: {
          bin: { position: { x: 390, y: 400 } },
          apu: { position: { x: 670, y: 440 } },
          toilet: { position: { x: 980, y: 330 } },
          cat: { position: { x: 330, y: 580 } },
        },
      },
    },
  },
};

module.exports = { quest };
