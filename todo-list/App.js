const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

const addTodo = (todo) => {
  let todoText = input.value;
  console.log(todoText);

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEL = document.createElement('li');
    if (todo && todo.completed) {
      todoEL.classList.add('completed');
    }

    todoEL.innerHTML = todoText;

    todoEL.addEventListener('click', () => {
      todoEL.classList.toggle('completed');
      updateLs();
    });
    todoEL.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEL.remove();
      updateLs();
    });
    todoUL.appendChild(todoEL);
    input.value = '';
    updateLs();
  }
};

const updateLs = () => {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todosEl) => {
    todos.push({
      text: todosEl.innerText,
      completed: todosEl.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
