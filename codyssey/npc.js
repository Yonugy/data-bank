const npc = {
  bin: {
    name: "Bin",
    img: "trash_bin.png",
    scale: 0.1,
  },
  apu: {
    name: "APU",
    img: "apu_logo.png",
    scale: 0.5,
  },
  toilet: {
    name: "Toilet",
    img: "toilet.png",
    scale: 0.5,
  },
  cat: {
    name: "Cat",
    img: "cat-sheet.png",
    scale: 0.7,
    animation: {
        cat_turn:{
            startFrame:0,
            endFrame: 93,
            frameRate: 60,
            repeat: 1,
        },
    },
    initialFrame: 0,
  },
};

module.exports = { npc };
