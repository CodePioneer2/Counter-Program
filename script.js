// COUNTER PROGRAM

const incraseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const countLabel = document.getElementById("count-label");

let count = 0;

function updateCountAndColor() {
  countLabel.textContent = count;

  if (count < 0) {
    countLabel.style.color = "red";
  } else {
    countLabel.style.color = "green";
  }
  if (count == 0) {
    countLabel.style.color = "white";
  }
}
incraseBtn.onclick = function () {
  count++;
  updateCountAndColor();
};
decreaseBtn.onclick = function () {
  count--;
  updateCountAndColor();
};
resetBtn.onclick = function () {
  count = 0;
  updateCountAndColor();
};
