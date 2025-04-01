const location = {
  town:{
    scale: 2,
    img: "town_bg",
    bgcolor: "#E98B45",
    label: "Town",
    type: "MainScene",
    npc: {
      // bin: { position: { x: 390, y: 400 } },
      apu: { position: { x: 670, y: 440 } },
      toilet: { position: { x: 980, y: 330 } },
      cat: { position: { x: 330, y: 580 } },
    },
  },
  house1:{
    scale: 1.2,
    img: "house1_interior",
    bgcolor: "#4F546B",
    label: "Beh's House",
    parent: "town",
    type: "IndoorScene",
    spawn: {x: 415, y: 780,},
    npc: {
      samurai: { position: { x: 800, y: 225 } },
    },
  },
  ownhouse:{
    scale: 3,
    img: "ownhouse_interior",
    bgcolor: "#3B2821",
    label: "Your House",
    parent: "town",
    type: "IndoorScene",
    spawn: {x: 215, y: 310,}
  }
};

module.exports = { location };
