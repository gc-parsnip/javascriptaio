const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionLR = 0;
let positionTD = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowUp") {
    positionTD = positionTD - 10;
  }
  if (e.code === "ArrowDown") {
    positionTD = positionTD + 10;
  }
  if (e.code === "ArrowLeft") {
    positionLR = positionLR - 10;
  }
  if (e.code === "ArrowRight") {
    positionLR = positionLR + 10;
  }
  if (positionLR < 0) {
    positionLR = 0;
  }
  if (positionTD < 0) {
    positionTD = 0;
  }
  refresh(); // update the balls position.
}
function refresh() {
  ball.style.left = positionLR + "px";
  ball.style.top = positionTD + "px";
}
