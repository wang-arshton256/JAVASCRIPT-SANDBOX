const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
data.forEach((todo) => {
  
});
});
};

const addTodoToDom = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.complete) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
  
};

const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    little: e.target.firstElementChild.value,
    complete: false,
  }

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));  
};


const init = () => { 
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
}

getTodos();