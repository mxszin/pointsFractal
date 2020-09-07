import { applyToPoint } from 'transformation-matrix';

const canvas = document.createElement('canvas');
const body = document.getElementsByTagName("body")[0];
const startButton = document.getElementById("start");
body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.id = "CursorLayer";
canvas.width = document.body.clientWidth * .9;
canvas.height = document.body.clientHeight * .9;
canvas.style.zIndex = '8';
canvas.style.position = "absolute";
canvas.style.border = "1px solid";

canvas.addEventListener('click', (e) => {
  // const x = e.offsetX
  // const y = e.offsetY
  
  // vertices.push({ x, y })
  // point({ x, y, opacity: 1, radius: 4 })
  // console.log({ x, y });
})

startButton.addEventListener('click', () => {
  // if (vertices.length > 2) {
  //   init();
  // }
})

// function randomInt(min, max) {
// 	return min + Math.floor((max - min) * Math.random());
// }

// const vertices = [];

function renderPoint({ x, y, radius = 1, opacity = 0.6 }) {
  ctx.fillStyle = `rgba(250, 50, 50, ${opacity})`;
  ctx.beginPath();
  ctx.arc(x / 1000, y / 1000, radius, 0, 2 * Math.PI);
  ctx.fill();
}

// function getRandomVertex() {
//   const index = randomInt(0, vertices.length)
//   return vertices[index]
// }

function f1(point) {
  const matrix = {
    a: 0, c: 0, e: 0,
    b: 0, d: 0.16, f: 0
  }

  const vector = applyToPoint(matrix, point);
  point.x += vector.x;
  point.y += vector.y;
}

function f2(point) {
  const matrix = {
    a: 0.85, c: -0.04, e: 0,
    b: 0.04, d: 0.85, f: 1.6
  }

  const vector = applyToPoint(matrix, point);
  point.x += vector.x;
  point.y += vector.y;
}

function init() {
  let point = { x: canvas.width / 2, y: 42 }

  console.log(point);
  
  for (let i = 0; i < 1000; i++) {
    f1(point)
    console.log(point);
    renderPoint(point);
    f2(point)
    console.log(point);
    renderPoint(point);
  }

  // point(randomPoint)

  // const renderPoint = () => {
  //   const vertex = getRandomVertex()

  //   randomPoint.x = (randomPoint.x + vertex.x) / 2
  //   randomPoint.y = (randomPoint.y + vertex.y) / 2
  
  //   point(randomPoint)
  // }

  // const render = () => {
  //   for (let i = 0; i < 100; i++) {
  //     renderPoint()
  //   }
  //   requestAnimationFrame(render);
  // }

  // render();
}

init();
