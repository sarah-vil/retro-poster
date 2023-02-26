var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function draw() {
  // Background
  ctx.fillStyle = "#0080FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 72px Arial";
  ctx.fillText("Retro Poster", canvas.width / 2 - 200, 100);

  // Text
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "24px Arial";
  ctx.fillText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus turpis sit amet nulla porta, vel dignissim urna placerat.", canvas.width / 2 - 300, 200);

  // Image
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, canvas.width / 2 - 200, 300, 400, 400);
  }
  img.src = "https://via.placeholder.com/400x400";

  // Border
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

draw();
