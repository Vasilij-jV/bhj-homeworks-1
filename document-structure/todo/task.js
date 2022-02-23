const tasksList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");
let tasksAdd = document.getElementById("tasks__add");

function addForm(event) {

   if (event.key === "Enter" || event.target === tasksAdd && taskInput.value.trim().length > 0) {

      let divv = tasksList.appendChild(document.createElement("div"));
      divv.outerHTML = `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
      taskInput.value = null;

      removeTask = document.querySelectorAll(".task__remove");
      let removeTaskLength = removeTask.length - 1;
      removeTask[removeTaskLength].addEventListener("click", (event) => { event.target.closest(".task").remove() });
   }
}


window.addEventListener("keydown", addForm);
tasksAdd.addEventListener("click", addForm);
document.getElementById("tasks__form").addEventListener("submit", () => { event.preventDefault(); });
