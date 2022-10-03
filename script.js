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
  // console.log(sum);
  // console.log(inputValue);
};

const calculateSum = function (dob) {
  dob = dob.replaceAll("-", "");
  // console.log(dob);
  let ans = 0;
  for (let i = 0; i < dob.length; i++) {
    ans = ans + Number(dob.charAt(i));
  }
  return ans;

  // console.log(ans);
};
const checkYourBirthdayLucky = function () {
  const dob = dateOfBirth.value;
  // console.log(dob);
  const sum = calculateSum(dob);
  // console.log(sum);
  const inputValue = luckyNumber.value;
  if (dob && inputValue) {
    checkLuckyOrNot(sum, inputValue);
  } else {
    outputBox.innerText = "Please provide both input😡";
  }
};

checkButton.addEventListener("click", checkYourBirthdayLucky);
