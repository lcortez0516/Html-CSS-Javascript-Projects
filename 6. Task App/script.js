// Todo List App

const newTask = document.querySelector(".newTask");
const addBtn = document.querySelector(".addBtn");
const taskContainer = document.querySelector(".taskContainer");

addBtn.addEventListener("click", (e) => {
  // new Li
  const newLi = document.createElement("li");
  newLi.classList.add("relative");

  //new div
  const newDiv = document.createElement("div");
  newDiv.classList.add(
    "absolute top-0 left-0 rounded-[50%] h-5 border-slate-400 border-1 w-5 mr-5"
  );

  // new p
  const newP = document.createElement("p");
  newP.classList.add("ml-10");
  newP.textContent = newTask;

  //   render
  newDiv.append(newP);
  newLi.append(newDiv);
  taskContainer.append(newLi);
});
