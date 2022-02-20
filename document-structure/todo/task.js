const tasksList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");


window.addEventListener("keydown", (event) => {
   if (event.keyCode === 13 && taskInput.value.trim().length > 0) {
      event.preventDefault();
      let divv = tasksList.appendChild(document.createElement("div"));
      divv.outerHTML = `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
      taskInput.value = null;

      let removeTask = document.querySelectorAll(".task");

      for (let item of removeTask) {
         item.lastElementChild.addEventListener("click", (event) => { event.target.closest(".task").remove() });
      }
   }

   if (event.keyCode === 13 && taskInput.value.trim().length === 0) {
      event.preventDefault();
   }

});