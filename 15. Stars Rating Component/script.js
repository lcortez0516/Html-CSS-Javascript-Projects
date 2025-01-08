const stars = document.querySelectorAll(".fa-star");
const selectedRatingValueText = document.querySelector(".selected-value");

let currentTotalSelectedStars = -1;
stars.forEach((starItem, index) => {
  //adding a data set to the items (1,2,3,4,5)
  starItem.dataset.rating = index + 1;
  //adding event listeners
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

//handle mouse over
function handleMouseOver(e) {
  const currentRatingValue = e.target.dataset.rating;
  //   console.log(e.target.dataset.rating);
  //if nothing is hovered - just do nothing
  if (!currentRatingValue) return;
  //pass the current star
  else changeStarColor(currentRatingValue);
}

function changeStarColor(currentRatingValue) {
  //selecting all numbers below current selected star becauase they need to be hovered also
  //count to 5 - basically loop thru each stars. if its less than the selected star, change the color, else, return color to normal
  for (i = 0; i < 5; i++) {
    if (i < currentRatingValue) {
      stars[i].classList.add("hovered");
    } else {
      stars[i].classList.remove("hovered");
    }
  }
}

//handle click
function handleClick(e) {
  const clickedStar = e.target.dataset.rating;
  currentTotalSelectedStars = clickedStar;
  changeStarColor(currentTotalSelectedStars);
  selectedRatingValueText.textContent = `Selected Rating Value is: ${currentTotalSelectedStars}`;
}

//handle mouse leave
function handleMouseLeave(e) {
  changeStarColor(currentTotalSelectedStars);
}
