const calculator = document.getElementsByClassName("calculator")[0];
const display = document.querySelector(".calculator .display");
calculator.addEventListener("click", e => {
  if (e.target.className === "btn") {
    const func = e.target.dataset.func;
    if (func === "num") {
      display.textContent += e.target.textContent;
    } else if (func === "clr") {
      display.textContent = "";
    } else if (func === "equ") {
      const replacements = {
        "×": "*",
        "÷": "/",
        "−": "-"
      }
      const equationTxt = display.textContent;
      const equation = equationTxt.replace(/×|÷|−/g, matched => replacements[matched]);
      display.textContent = eval(equation);
    }
  }
});