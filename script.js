const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const checkLuckyOrNot = function (sum, inputValue) {
  if (sum % inputValue == 0) {
    outputBox.innerText = "Your BirthDay is Lucky!🥳";
  } else {
    outputBox.innerText = "Ohh!!Your Birthday is not Lucky🤢.";
  }
};

const calculateSum = function (dob) {
  dob = dob.replaceAll("-", "");
  let ans = 0;
  for (let i = 0; i < dob.length; i++) {
    ans = ans + Number(dob.charAt(i));
  }
  return ans;
};
const checkYourBirthdayLucky = function () {
  if (luckyNumber.value <= 0) {
    outputBox.innerText = "Invalid input😡";
    return;
  }
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  const inputValue = luckyNumber.value;
  if (dob && inputValue) {
    checkLuckyOrNot(sum, inputValue);
  } else {
    outputBox.innerText = "Please provide both input😡";
  }
};

checkButton.addEventListener("click", checkYourBirthdayLucky);
