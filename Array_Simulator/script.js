let inputPara = document.querySelector("#inputpara");
let addBtn = document.querySelector("#addBtn");
let printBtn = document.querySelector("#printBtn");
let resultPara = document.querySelector("#resultPara");
let printPara = document.querySelector("#printPara");
let clearBtn = document.querySelector("#clearBtn");
let clearPara = document.querySelector("#clearPara");

let arr = [];

addBtn.addEventListener("click", () => {
  arr.push(inputPara.value);
  resultPara.textContent = `${inputPara.value} has been added sucessfully in Array !`;
  alert(`${inputPara.value} has been added sucessfully in Array !`);
  inputPara.value = "";
  printPara.textContent = "";
  clearPara.textContent = "";
});

printBtn.addEventListener("click", () => {
  resultPara.textContent = "";
  printPara.textContent = ` Your array's value are : ${arr}  `;
  clearPara.textContent = "";
});

clearBtn.addEventListener("click", () => {
  arr.length = 0;
  printPara.textContent = "";
  resultPara.textContent = "";

  clearPara.textContent = "Array has been cleared successfully !";
});
