const inputBox = document.getElementById("todo-input");
// const inputRange = document.getElementById("vol");
const ongoingTask = document.getElementById("ongoingTaskUL");
const finishedTask = document.getElementById("finishedTaskUL");

function addTask(event) {
  if (inputBox.value == "") {
    alert("You must write a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ongoingTask.appendChild(li);

    // let span = document.createElement("span");
    // span.innerHTML = "&#8606;";
    // li.appendChild(span);

    let span = document.createElement("span");
    span.innerHTML = "&#x2718;";
    li.appendChild(span);
    ongoingTask.appendChild(document.createElement("hr"));

    // li.appendChild(vol);
  }
  inputBox.value = "";
  saveData();
}
ongoingTask.addEventListener("click", handleTaskClick, false);

finishedTask.addEventListener("click", handleTaskClick, false);

// function handleTaskClick(e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//     filterTask(e.target);

//     saveData();
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();

//     saveData();
//   }
// }

function handleTaskClick(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    filterTask(e.target);
    saveData();
  } else if (e.target.tagName === "SPAN") {
    const liElement = e.target.parentElement;
    const hrElement = liElement.nextElementSibling;

    liElement.remove();

    if (hrElement && hrElement.tagName === "HR") {
      hrElement.remove();
    }

    saveData();
  }
}

function filterTask(task) {
  const hrElement = task.nextElementSibling;

  if (task.classList.contains("checked")) {
    finishedTask.appendChild(task);
    if (hrElement && hrElement.tagName === "HR") {
      finishedTask.appendChild(hrElement);
    }
  } else {
    ongoingTask.appendChild(task);
    if (hrElement && hrElement.tagName === "HR") {
      ongoingTask.appendChild(hrElement);
    }
  }
}

// function filterTask(task) {
//   if (task.classList.contains("checked")) {
//     finishedTask.appendChild(task);
//   } else {
//     ongoingTask.appendChild(task);
//   }
// }

function saveData() {
  localStorage.setItem("data1", ongoingTask.innerHTML);
  localStorage.setItem("data2", finishedTask.innerHTML);
}
function showTask() {
  ongoingTask.innerHTML = localStorage.getItem("data1");
  finishedTask.innerHTML = localStorage.getItem("data2");
}

showTask();

// const spans = document.querySelectorAll("ul li");
// spans.forEach((span) => {
//   span.setAttribute("draggable", "true");
//   span.addEventListener("dragstart", dragStart);
//   span.addEventListener("dragover", dragOver);
//   span.addEventListener("drop", drop);
// });

// let draggedItem = null;

// function dragStart(e) {
//   draggedItem = e.target;
//   e.dataTransfer.effectAllowed = "move";
// }

// function dragOver(e) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
// }

// function drop(e) {
//   e.preventDefault();
//   const parent = e.target.parentNode;
//   if (parent === draggedItem.parentNode) {
//     const listItems = Array.from(parent.querySelectorAll("li"));
//     const indexDragged = listItems.indexOf(draggedItem);
//     const indexTarget = listItems.indexOf(e.target);
//     if (indexDragged < indexTarget) {
//       parent.insertBefore(draggedItem, e.target.nextSibling);
//     } else {
//       parent.insertBefore(draggedItem, e.target);
//     }
//   } else {
//     parent.insertBefore(draggedItem, e.target);
//   }
// }
