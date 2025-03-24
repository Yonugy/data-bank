const indoor = {
  house1:{
    scale: 1.2,
    img: "house1_interior",
    bgcolor: "#4F546B",
    label: "Beh's House",
    parent: "town",
    spawn: {x: 415, y: 780,}
  },
  ownhouse:{
    scale: 3,
    img: "ownhouse_interior",
    bgcolor: "#3B2821",
    label: "Your House",
    parent: "town",
    spawn: {x: 215, y: 310,}
  }
};

module.exports = { indoor };
