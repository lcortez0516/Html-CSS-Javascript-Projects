const pwd = document.querySelector(".pwd-text");
const passwordBox = document.querySelector(".password");
const button = document.querySelector(".button");
const copy = document.querySelector(".copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()[]{}<>/_";

const makePwd = (runner) => {
  let generatedPassword = ``;

  for (let x = 1; x <= 4; x++) {
    generatedPassword +=
      upperCase[Math.floor(Math.random() * upperCase.length)];
    generatedPassword +=
      lowerCase[Math.floor(Math.random() * lowerCase.length)];
    generatedPassword += number[Math.floor(Math.random() * number.length)];
    generatedPassword += symbol[Math.floor(Math.random() * symbol.length)];
  }
  runner(generatedPassword);
};

function runner(generatedPassword) {
  pwd.innerText = generatedPassword;
  passwordBox.classList.remove("hidden");
}

button.addEventListener("click", () => makePwd(runner));
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(pwd.innerText);
  alert("Text Copied!");
});
