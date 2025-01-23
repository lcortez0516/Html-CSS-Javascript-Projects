const hexBtn = document.querySelector(".hexBtn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
//create random hex color
hexBtn.addEventListener("click", (e) => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.backgroundColor = `#${hexColorOutput}`;
});

//create RGB Color
const rgbBtn = document.querySelector(".rgbBtn");

rgbBtn.addEventListener("click", () => {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;

  const rgbColorValue = document.querySelector(".rgb-color-value");
  const rgbColorContainer = document.querySelector(`.rgb-color-container`);

  rgbColorContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  rgbBtn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  rgbColorValue.textContent = `rgb(${red}, ${green}, ${blue})`;
});

//copy to clipboard functionality

const hexCopyBtn = document.querySelector(".hexCopyBtn");
const rgbCopyBtn = document.querySelector(".rgbCopyBtn");

const hexCopyToClipboard = () => {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Color is Copied to Clipboard");
};
hexCopyBtn.addEventListener("click", hexCopyToClipboard);

const rgbCopyToClipboard = () => {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("Color is Copied to Clipboard");
};
rgbCopyBtn.addEventListener("click", hexCopyToClipboard);
