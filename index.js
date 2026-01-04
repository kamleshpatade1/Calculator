let inp = document.getElementById("box");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inp.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inp.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      inp.value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      inp.value = string;
    }
  });
});