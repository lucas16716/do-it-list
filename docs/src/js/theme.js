// Seleciona o link de troca de tema
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Define o tema inicial como amarelo
body.classList.add("theme-yellow");

// Função para alternar entre temas
themeToggle.addEventListener("click", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do link

  // Alterna o tema apenas se o evento vier do link de troca de tema
  if (event.target === themeToggle) {
    if (body.classList.contains("theme-yellow")) {
      body.classList.replace("theme-yellow", "theme-blue");
    } else {
      body.classList.replace("theme-blue", "theme-yellow");
    }
  }
});
