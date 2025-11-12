(() => {
  "use strict";

  const form = document.getElementById("to-do-form");
  const input = document.getElementById("input-add-tasks");
  const taskList = document.getElementById("to-do-list");

  // Função para adicionar uma nova tarefa
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");

      const taskTextElement = document.createElement("span");
      taskTextElement.classList.add("task-text");
      taskTextElement.textContent = taskText;
      taskItem.appendChild(taskTextElement);

      const completeButton = document.createElement("button");
      completeButton.classList.add("task-complete");
      completeButton.textContent = "✓";
      completeButton.type = "button";
      completeButton.addEventListener("click", function () {
        taskTextElement.classList.toggle("completed");
      });
      taskItem.appendChild(completeButton);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("task-delete");
      deleteButton.textContent = "X";
      deleteButton.type = "button";
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
      });
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      input.value = "";
    } else {
      alert("Ops, parece que você não digitou sua meta");
    }
  });
})();
