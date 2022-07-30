const socket = new WebSocket("ws://ucha.ge:8084");

// let table = document.getElementsByTagName("table")[0];
// let td = table.getElementsByTagName("td");

// let colors = [
//     "blue",
//     "yellow",
//     "lightblue",
//     "red",
//     "brown",
//     "orange",
//     "pink",
//     "violet",
//     "purple",
//     "gold",
//   ];

// td.addEventListener("click", () => {
//   var randomColor = colors[Math.floor(Math.random() * colors.length)];
//   td.style.backgroundColor = randomColor;
//   console.log("clicked cell");
// });

// let td = document.querySelectorAll("td");

// for (let i = 0; i < td.length; i++) {
//   let rgb = [];

//   for (var i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 255));

//   td[i].style.backgroundColor = "rgb(" + rgb.join(",") + ")";
// }

let cell = document.querySelectorAll("td");

let colors = [
  "blue",
  "yellow",
  "lightblue",
  "red",
  "brown",
  "orange",
  "pink",
  "violet",
  "purple",
  "gold",
];

let getRandomColor = function () {
  let value = Math.random() * colors.length;
  let floored = Math.floor(value);
  return colors[floored];
};

for (let i = 0; i < cell.length; i++) {
  let element = cell[i];
  let myColor = getRandomColor();

  element.addEventListener("click", () => {
    element.style.backgroundColor = myColor;
    console.log("clicked cell");
  });
}
