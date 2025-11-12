(() => {
  "use strict";

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const taskForm = document.getElementById("to-do-form");

  body.classList.add("theme-yellow");

  // Função para alternar entre temas
  themeToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.currentTarget === themeToggle) {
      if (body.classList.contains("theme-yellow")) {
        body.classList.replace("theme-yellow", "theme-blue");
      } else {
        body.classList.replace("theme-blue", "theme-yellow");
      }
    }
  });

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
})();
