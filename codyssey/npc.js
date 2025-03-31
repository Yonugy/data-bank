const npc = {
  bin: {
    name: "Bin",
    type: "image",
    img: "trash_bin.png",
    scale: 0.1,
  },
  apu: {
    name: "APU",
    type: "image",
    img: "apu_logo.png",
    scale: 0.5,
  },
  toilet: {
    name: "Toilet",
    type: "image",
    img: "toilet.png",
    scale: 0.5,
  },
  cat: {
    name: "Cat",
    type: "spritesheet",
    img: "cat-sheet.png",
    scale: 0.7,
    frameSize: {
        width: 247.5,
        height: 247.5,
    },
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
  samurai: {
    name: "Samurai",
    type: "spritesheet",
    img: "samurai_idle.png",
    scale: 1,
    frameSize: {
        width: 128,
        height: 128,
    },
    animation: {
        samurai_idle:{
            startFrame:0,
            endFrame: 5,
            frameRate: 60,
            repeat: 0,
        },
    },
    initialFrame: 0,
  },
};

module.exports = { npc };
