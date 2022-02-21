const tasksList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");


window.addEventListener("keydown", (event) => {
   if (event.key === "Enter" && taskInput.value.trim().length > 0) {

      let divv = tasksList.appendChild(document.createElement("div"));
      divv.outerHTML = `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
      taskInput.value = null;


      removeTask = document.querySelectorAll(".task__remove");

      for (let i = 0; i < removeTask.length; i++) {
         let removeTaskLength = removeTask.length - 1;
         removeTask[removeTaskLength].addEventListener("click", (event) => { event.target.closest(".task").remove() });
      }
   }
});

taskInput.addEventListener("submit", () => { event.preventDefault(); });
