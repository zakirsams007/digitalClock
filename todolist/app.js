// ............ Todo list save in Array...........
const todoList = [];

// ............ render todo list...........

const renderTodo = () => {
  //.........ist in wrapper

  const todoListWrapper = document.getElementById('todo-list');

  //............mapping array list under wrapper

  const todoItems = todoList
    .map(function (todo, index) {
      const done = todo.done ? 'done' : ''; //.......check done or not.
      const check = todo.done ? 'fas fa-check-circle' : 'far fa-circle';

      // console.log(todo, index)

      //............return list........

      return ` <li>
                        <a href="#" class="todo-content ${done}" onclick = "checkUncheck(${index})">
                        <i class="far fa-circle  ${check} " ></i>
                        <span class="todo-text"> ${todo.text} </span>
                        </a>

                        <a href="#" class="trash" onclick='trashTodo(${index})'>
                        <i class="far fa-trash-alt"></i>
                        </a>
                 </li>`;
    })
    .join(''); //......remove comma

  //..............populate item in wrapper and display message if list is empty......
  todoListWrapper.innerHTML =
    todoItems !== '' ? todoItems : `<li class="no-todo"> No Todo Found.  </li>`;
};
renderTodo();

// ............ check Uncheck function...........

const checkUncheck = (index) => {
  //  console.log(index)

  //...get specified todo
  let todo = todoList[index];
  todo.done = !todo.done ? true : false;

  //......regenerate list....
  renderTodo();
};

//..............Add todo in list........

const addTodo = (event) => {
  event.preventDefault();

  //...get user input todo list.....
  let todoText = document.getElementById('todo-text');

  if (todoText.value !== '') {
    // add user input todo
    todoList.push({
      text: todoText.value,
      done: false,
    });
    // remove text in input field after adding..

    console.log(todoList);
    todoText.value = '';

    renderTodo();
  }
};

// ............ Delete function...........

const trashTodo = (index) => {
  // remove todo..
  todoList.splice(index, 1);
  renderTodo();
};

// ............ Todo list save in Array...........
