const list = document.getElementById("ft_list");
const newButton = document.getElementById("new");

function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((part) => part.startsWith(name + "="));

  return cookie ? cookie.slice(name.length + 1) : null;
}

function loadTodos() {
  const saved = getCookie("todos");

  if (saved === null) {
    return [];
  }

  try {
    const todos = JSON.parse(decodeURIComponent(saved));
    return Array.isArray(todos) ? todos : [];
  } catch {
    return [];
  }
}

let todos = loadTodos();

function saveTodos() {
  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) +
    "; max-age=31536000; path=/; SameSite=Lax";
}

function showTodos() {
  list.replaceChildren();

  todos.forEach((text, index) => {
    const item = document.createElement("div");
    item.textContent = text;

    item.addEventListener("click", () => {
      if (confirm(`ต้องการลบ "${text}" หรือไม่?`)) {
        todos.splice(index, 1);
        saveTodos();
        showTodos();
      }
    });

    list.appendChild(item);
  });
}

newButton.addEventListener("click", () => {
  const answer = prompt("to do !!:");

  if (answer === null || answer.trim() === "") {
    return;
  }

  todos.unshift(answer.trim());
  saveTodos();
  showTodos();
});

showTodos();