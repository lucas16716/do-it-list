// Seleciona os elementos do DOM necessários
const form = document.getElementById("to-do-form");
const input = document.getElementById("input-add-tasks");
const taskList = document.getElementById("to-do-list");

// Função para adicionar uma nova tarefa
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

  const taskText = input.value.trim(); // Obtém o valor do input e remove espaços extras

  if (taskText !== "") {
    // Cria um novo elemento <li> para a tarefa
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Cria um span para o texto da tarefa e adiciona o texto
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("task-text");
    taskTextElement.textContent = taskText;
    taskItem.appendChild(taskTextElement);

    // Botão "Concluir" (✓)
    const completeButton = document.createElement("button");
    completeButton.classList.add("task-complete");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", function () {
      taskTextElement.classList.toggle("completed"); // Marca a tarefa como concluída
    });
    taskItem.appendChild(completeButton);

    // Botão "Remover" (x)
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task-delete");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      taskItem.remove(); // Remove o item da lista
    });
    taskItem.appendChild(deleteButton);

    // Adiciona a tarefa à lista de tarefas
    taskList.appendChild(taskItem);

    // Limpa o campo de entrada após adicionar a tarefa
    input.value = "";
  } else {
    alert("Ops, parece que você não digitou sua meta"); // Alerta caso o campo esteja vazio
  }
});
