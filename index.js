const countDisplay = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-el");
const saveBtn = document.getElementById("save-el");
const entryDisplay = document.getElementById("entires-el");

let count = 0;

function increaseCount() {
  count += 1;
  countDisplay.textContent = count;
};

function displayEntry() {
entryDisplay.textContent += " " + count + " " + "-";
count = 0;
countDisplay.textContent = count;
};

incrementBtn.addEventListener("click", increaseCount);

saveBtn.addEventListener("click", displayEntry);

