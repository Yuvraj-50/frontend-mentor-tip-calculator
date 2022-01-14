const bill = document.getElementById("bill");
const btnContainer = document.querySelector(".btn-container");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const customTip = document.getElementById("custom-btn");
const btns = document.querySelectorAll(".tip-btn");
const resetBtn = document.getElementById("reset-btn");

let person = 1;
let billValue = 0;
let tipvalue = 0;

const calcBillVal = function () {
  billValue = +bill.value;
  calcTipAmount();
};

const CalcTipValue = function (e) {
  if (e.target.classList.contains("btn")) {
    tipvalue = +e.target.textContent.slice(0, -1);
    btns.forEach((btn) => {
      btn.classList.remove("active-btn");
      if (e.target.textContent === btn.textContent) {
        btn.classList.add("active-btn");
      }
    });
  }
  calcTipAmount();
};

const CalcCustomTipValue = function () {
  tipvalue = +customTip.value;
  calcTipAmount();
};

const calcPersonValue = function () {
  if (people.value <= 0) {
    person = 1;
    console.log(person);
    document.getElementById("message").classList.remove("hidden");
    people.classList.add("people");
  } else {
    person = +people.value;
    calcTipAmount();
    document.getElementById("message").classList.add("hidden");
    people.classList.remove("people");
  }
};
const calcTipAmount = function () {
  const t = (billValue * tipvalue) / 100 / person;
  tipAmount.textContent = `$${t.toFixed(2, 0)}`;

  const h = t + billValue / person;
  totalAmount.textContent = `$${h.toFixed(2, 0)}`;
};

const reset = function () {
  billValue = 0;
  tipvalue = 0;
  person = 1;
  bill.value = billValue;
  people.value = person;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
};

bill.addEventListener("input", calcBillVal);
btnContainer.addEventListener("click", CalcTipValue);
customTip.addEventListener("input", CalcCustomTipValue);
people.addEventListener("input", calcPersonValue);
resetBtn.addEventListener("click", reset);
