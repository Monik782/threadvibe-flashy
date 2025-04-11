const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;
let radius = 30;
let dx = 4;
let dy = 4;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = "lime";
  ctx.fill();
  ctx.closePath();

  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;

  x += dx;
  y += dy;

  requestAnimationFrame(draw);
}

draw();
