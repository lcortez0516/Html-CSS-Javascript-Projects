//auto text generator
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];

const typingDelay = 200;
const erasingDelay = 200;
//Delay between current and next text
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, typingDelay);
  }
});

//type
function type() {
  //basically, check whether there is still letter left to type
  if (charIndex < words[index].length) {
    //if there is, type it
    typedText.textContent += words[index].charAt(charIndex);
    //then increment the charIndex
    charIndex++;
    //And then run the function again - basically, a loop using callback function setTimeout
    setTimeout(type, typingDelay);
  } else {
    //if the letters run out,  run the erase function.
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  //basically, check whether there are still letters to erase - which there is
  if (charIndex > 0) {
    //erase it
    typedText.textContent = words[index].substring(0, charIndex - 1);
    //decrement the letter selector variable
    charIndex--;
    //run the function again with this delay
    setTimeout(erase, erasingDelay);
    //then if there is no letters left to erase,
  } else {
    //increment the word selector to select the next word from the array
    index++;
    //then, if there are no words left in the array, o back to the firsst word
    if (index >= words.length) {
      index = 0;
    }
    //then run the typing function again with this delay
    setTimeout(type, typingDelay + 1100);
  }
}
