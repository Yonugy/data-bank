const quest = {
  init:"quest1",

  quest1: {
    startquest:"quest1intro",
    subquest: {
      quest1intro: {
        title: "a",
        criteria:["end_quest1_intro"],
        npc:{
          bin:{
            position: {x: 390, y: 400,}
          },
          apu:{
            position: {x: 670, y: 440,}
          },
          toilet:{
            position: {x: 980, y: 330,}
          },
          cat:{
            position: {x: 330, y: 580,}
          },
        },
        nextsubquest:"quest1start"
      },

      quest1start: {
        title: "b",
        criteria:["done_shit_to_toilet"],
        npc:{
          bin:{
            position: {x: 390, y: 400,}
          },
          apu:{
            position: {x: 670, y: 440,}
          },
          toilet:{
            position: {x: 980, y: 330,}
          },
          cat:{
            position: {x: 330, y: 580,}
          },
        },
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
        npc:[
          {
            tag: bin,
            position: {x: 390, y: 400,}
          },
          {
            tag: apu,
            position: {x: 670, y: 440,}
          },
          {
            tag: toilet,
            position: {x: 980, y: 330,}
          },
          {
            tag: cat,
            position: {x: 330, y: 580,}
          },
        ],
        nextsubquest:"quest2start"
      },

      quest2start: {
        title: "d",
        criteria:["done_trash_to_cat"],
        npc:[
          {
            tag: bin,
            position: {x: 390, y: 400,}
          },
          {
            tag: apu,
            position: {x: 670, y: 440,}
          },
          {
            tag: toilet,
            position: {x: 980, y: 330,}
          },
          {
            tag: cat,
            position: {x: 330, y: 580,}
          },
        ],
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
