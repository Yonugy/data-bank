const dialogue = {
    bin: {
      quest1intro: {
        "Do you want to live in bin or marry bin?": {
          choice: {
            "Live in bin": {
              respond: "Welcome home, you definitely belong in the bin!",
            },
            "Marry bin": {
              respond: "Congrats on your marriage!",
            },
          },
        },
        "Please go get some help!": "",
        "Who will even want to live in bin or even marry the smelly bin.": "",
        "You are the first one that does it no cap no aura.": "",
        "Now go get the shit in the toilet.": {
          fulfill: "end_quest1_intro",
          respond: "",
        },
      },
  
      quest1start: {
        "Go get the shit in the toilet!": "",
      },
  
      quest2intro: {
        "Good job in getting the shit in the skibidi toilet!": "",
        "Next, go get the trash in the oiia!": {
          fulfill: "end_quest2_intro",
          respond: "",
        },
      },
  
      quest2start: {
        "Go get the trash in the oiia!": "",
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
        "What do you want?": {
          choice: {
            Trash: {
              item: "trash",
              mode: "take",
              respond: "Here you go! Trash taking trash!",
            },
  
            Shit: {
              item: "shit",
              mode: "take",
              respond: "Here you go! Shit taking shit!",
            },
          },
        },
      },
      quest2start: {
        "What do you want?": {
          choice: {
            Trash: {
              item: "trash",
              mode: "take",
              respond: "Here you go! Trash taking trash!",
            },
  
            Shit: {
              item: "shit",
              mode: "take",
              respond: "Here you go! Shit taking shit!",
            },
          },
        },
      }
    },
  
    toilet: {
      quest1start: {
        "Skibidi skibidi toilet": "",
        "What is your problem?": {
          choice: {
            "Give Shit": {
              item: "shit",
              mode: "give",
              yrespond: "HUUUURGGEHH",
              nrespond:
                "Bro doesn't have shit. I wonder what does bro still can have.",
              fulfill: "done_shit_to_toilet",
            },
  
            Bye: {
              respond: "What the sigma?",
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
            "Give Trash": {
              item: "trash",
              mode: "give",
              yrespond: "EEEEEEAAAAAAAAAAAAAAARRRRRRRRRRRRRREIR",
              nrespond:
                "Nub trash, I can now talk English more than just oiia because I see you nub",
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
        "Nothing to do in the house. Get out!!!": {
          fulfill: "end_quest3_start",
          respond: "",
        },
      },
    }
  };
  
  module.exports = { dialogue };
  