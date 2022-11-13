// Sample Data;
const data = [
  // {
  //   title: "Day 1",
  //   body: "Lost 20 Points.",
  //   level: 1, // 1-5
  // },
];

for (var i = 0; i < 7; i++) {
  const isGained = Math.random() < 0.7;

  var obj = {
    title: "Day " + (i + 1),
    body: `${isGained ? "Gained" : "Lost"} <strong>${
      Math.floor(Math.random() * 50) + 1
    } Points</strong>`,
    level: isGained ? 1 : 5,
  };
  data.push(obj);
}

export default data;
