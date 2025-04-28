const dialogue = {
  bin: {
    quest1intro: {
      "Do you want to open or close bin?": {
        choice: {
          "Open bin": {
            respond: "You had opened the bin!",
          },
          "Close bin": {
            respond: "The bin is now closed!",
          },
        },
      },
      "Anyways, I am bin. You can call me bin.": "",
      "I need your help to take the tissue paper to the toilet.": {
        fulfill: "end_quest1_intro",
        respond: "",
      },
    },

    quest1start: {
      "Take the tissue paper to the toilet!": "",
    },

    quest2intro: {
      "Good job in taking the tissue paper to the toilet!": "",
      "Next, take the food and give it to the cat!": {
        fulfill: "end_quest2_intro",
        respond: "",
      },
    },

    quest2start: {
      "Take the good and give it to the cat!": "",
    },

    quest3intro: {
      "Good job!": "",
      "You can now go to Beh's House!":{
        fulfill: "end_quest3_intro",
        respond: "",
      }
    },

    quest3point1: {
      "Go talk to Samurai": {
        fulfill: "end_quest3_point_1",
        respond: "",
      },
    },

  },

  apu: {
    quest1start: {
      "What do you need?": {
        choice: {
          Tissue: {
            item: "tissue",
            mode: "take",
            respond: "Here you go, one box of tissue paper!",
          },

          Food: {
            item: "food",
            mode: "take",
            respond: "Here you go, one pack of cat food!",
          },
        },
      },
    },
    quest2start: {
      "What do you need?": {
        choice: {
          Tissue: {
            item: "tissue",
            mode: "take",
            respond: "Here you go, one box of tissue paper!",
          },

          Food: {
            item: "food",
            mode: "take",
            respond: "Here you go, one pack of cat food!",
          },
        },
      },
    }
  },

  toilet: {
    quest1start: {
      "Good morning": "",
      "Did you get me a box of tissue paper?": {
        choice: {
          "Give Tissue": {
            item: "tissue",
            mode: "give",
            yrespond: "Nice! Thanks!",
            nrespond:
              "Looks like you forgot to get me a box of tissue paper!",
            fulfill: "done_shit_to_toilet",
          },

          Bye: {
            respond: "See you later.",
          },
        },
      },
    },
  },

  cat: {
    quest2start: {
      "Oiiai, oiiai": {
        animation: "cat_turn"
      },
      "Oiiai, oiiai?": {
        choice: {
          "Give Food": {
            item: "food",
            mode: "give",
            yrespond: "Nom nom nom!",
            nrespond:
              "Meow? No food?",
            fulfill: "done_trash_to_cat",
          },

          Bye: {
            respond: "Oiiai, oiiai",
          },
        },
      },
    },
  },

  samurai:{
    quest3start: {
      "Hello, I am Samurai!": "",
      "Nothing to do in the house. See you later!!": {
        fulfill: "end_quest3_start",
        respond: "",
      },
    },
  }
};

module.exports = { dialogue };
