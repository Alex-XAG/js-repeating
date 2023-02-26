const btnAdd = document.querySelector("button[data-add]");
const btnReset = document.querySelector("button[data-reset]");
const inputValue = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span");

let total = 0;

btnAdd.addEventListener("click", () => {
  const value = Number(inputValue.value);

  total += value;

  outputEl.textContent = total;

  inputValue.value = "";
});

btnReset.addEventListener("click", () => {
  total = 0;
  outputEl.textContent = total;
});

function checkForSpam(message) {
  let result;
  // Change code below this line
  if (
    result.toLowerCase().includes("sale") ||
    result.toLowerCase().includes("spam")
  ) {
    result = true;
  } else {
    result = false;
  }

  // Change code above this line
  return result;
}
