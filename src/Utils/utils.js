export const emojis = [
  { id: 1, name: "lion", color: "#FDB825" },
  { id: 2, name: "fox", color: "#F47A00" },
  { id: 3, name: "wolf", color: "#8D8D8D" },
  { id: 4, name: "frog", color: "#ABD065" },
  { id: 5, name: "bear", color: "#9B6A43" },
  { id: 6, name: "unicorn", color: "#EF77F9" },
  { id: 7, name: "butterfly", color: "#2ED1FF" },
  { id: 8, name: "snail", color: "#E4CA9E" },
  { id: 9, name: "whale", color: "#5DC3D5" },
  { id: 10, name: "squid", color: "#FF7858" },
  { id: 11, name: "bee", color: "#E1BF03" },
  { id: 12, name: "pig", color: "#DA90A2" },
];

export const getGradient = (color) => {
  return {
    background: `linear-gradient(135deg, whitesmoke -100%, ${color})`,
  };
};
