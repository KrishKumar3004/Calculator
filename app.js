let exp = "";
const screen = document.querySelector(".screen");

document.addEventListener("click", (e) => {
  if (e.target.value === "=") {
    let res = eval(exp);
    screen.innerText = "";
    screen.append(res);
    exp = res;
  } else if (e.target.value === "x") {
    screen.innerText = "";
  } else if (e.target.value) {
    exp += e.target.value;
    screen.append(e.target.value);
  }
});
