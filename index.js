const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);
  const left = leftNumbers;

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    if (rightNumbers < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
      console.log(dodger.style.left);
      moveDodgerRight();
      console.log(dodger.style.left);
  }
});