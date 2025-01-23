// indicator

const indicator = document.querySelector(".scroll-indicator .progress");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  console.log(scrollHeight);
});

//get the scroll height of the page
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

//as the scroll change,
window.addEventListener("scroll", scroll);

function scroll() {
  //get the scroll position
  let scrollTop = document.documentElement.scrollTop;
  //calculate the percentage of the scroll position to the scroll height
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}

console.log(scrollHeight);
