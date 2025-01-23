// Todo List App

const newTask = document.querySelector(".newTask");
const addBtn = document.querySelector(".addBtn");
const tasksContainer = document.querySelector(".taskContainer");

// add task functionality
addBtn.addEventListener("click", (e) => {
  if (newTask.value == "") {
    console.log("none");
  } else {
    const liClass = ["flex", "justify-between", "items-center", "my-2"];
    const eachTaskContainerClass = ["task", "flex", "items-center"];
    const circleDivClass = [
      "w-4",
      "h-4",
      "border-slate-800",
      "border-1",
      "rounded-[50%]",
      "cursor-pointer",
    ];
    const iClass = ["fa", "fa-delete-left", "text-red-500", "cursor-pointer"];
    // new Li
    const li = document.createElement("li");
    li.classList.add(...liClass);
    // New input box Container
    const eachTaskContainer = document.createElement("div");
    eachTaskContainer.classList.add(...eachTaskContainerClass);
    // New Circle
    const newCircle = document.createElement("div");
    newCircle.classList.add(...circleDivClass);
    //newP
    const newP = document.createElement("p");
    newP.classList.add("ml-5", "cursor-pointer", "text-slate-800");
    newP.textContent = newTask.value;

    // new icon
    const newIcon = document.createElement("i");
    newIcon.classList.add(...iClass);

    // render
    eachTaskContainer.append(newCircle);
    eachTaskContainer.append(newP);
    li.append(eachTaskContainer);
    li.append(newIcon);
    tasksContainer.append(li);
    // clear the input field
    newTask.value = "";
    saveData();
  }
});

// Mark and delete functionality
tasksContainer.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == "I") {
    e.target.parentElement.remove();
    saveData();
  } else {
    const targetTask = e.target.closest("li");
    const selectedCircle = targetTask.firstElementChild.firstElementChild;
    const selectedP = targetTask.firstElementChild.lastElementChild;
    // Toggle select indicator
    selectedP.classList.toggle("line-through");
    selectedCircle.classList.toggle("bg-green-500");
    saveData();
  }
});

// save the data to the browser
function saveData() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}

//call the data everytime the browser loads
function getData() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}
getData();
