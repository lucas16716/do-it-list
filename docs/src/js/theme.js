// Seleciona os elementos do DOM
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const taskForm = document.getElementById("to-do-form");

// Define o tema inicial como amarelo
body.classList.add("theme-yellow");

// Função para alternar entre temas
themeToggle.addEventListener("click", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do link
  event.stopPropagation(); // Evita propagação de clique

  // Alterna o tema apenas se o clique for no link de troca de tema
  if (event.currentTarget === themeToggle) {
    if (body.classList.contains("theme-yellow")) {
      body.classList.replace("theme-yellow", "theme-blue");
    } else {
      body.classList.replace("theme-blue", "theme-yellow");
    }
  }
});

// Evita que o formulário cause recarregamento da página ou afete a troca de tema
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o envio do formulário
});
