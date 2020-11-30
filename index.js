const $numBtn = document.querySelector("#js-numBtn");
const $commedBtn = document.querySelector("#js-commendBtn");
const $calProcess = document.querySelector("#js-calProcess");
const $funBtn = document.querySelector("#js-funBtn");
const $result = document.querySelector("#js-result");

let calProcess = [];
let realProcess = [];
let realNum;

printProcess = () => {
  let num = "";
  for (let i = 0; i < calProcess.length; i += 1) {
    num = num + calProcess[i];
  }
  $calProcess.innerText = num;
};

handleClickNumBtn = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  const selectedNum = e.target.value;
  calProcess.push(selectedNum);
  printProcess();
};

handleClickCommedBtn = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  const selectedValue = e.target.value;
  calProcess.push(selectedValue);
  realProcess.push(selectedValue);
  printProcess();
};

sumProcess = () => {
  const result = Number(calProcess[0]) + Number(calProcess[2]);
  $result.innerText = result;
};

calculate = () => {
  if (realProcess[1] === "+") {
    sumProcess();
  }
};

handleClickFunBtn = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  if (e.target.value === "enter") {
    calculate();
  }
};

function init() {
  $numBtn.addEventListener("click", handleClickNumBtn);
  $commedBtn.addEventListener("click", handleClickCommedBtn);
  $funBtn.addEventListener("click", handleClickFunBtn);
}

init();
