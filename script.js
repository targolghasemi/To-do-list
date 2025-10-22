const form = document.getElementById('form');
const input = document.getElementById('input');
const addItem = document.getElementById('add-item');
const todoList = document.getElementById('todo-list');


let items = [];


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let todoInput = document.getElementById('input').value;

    if (todoInput === '') return;
    addToDom(todoInput);
    saveToLocalStorage(todoInput);
})

//adding tasks
function addToDom(text) {
    const li = document.createElement('li');

    const span = document.createElement('span'); // for text
    span.textContent = text;

    const btn = document.createElement('button'); // for deleting item
    btn.textContent = "Delete";
    btn.classList.add('delete-btn'); 

    btn.addEventListener('click' , () => {
        li.remove();
        removeTodo(text);
    });
    li.append(span , btn);
    todoList.appendChild(li);
}

//store to localStorage
function saveToLocalStorage(todo) {
    items.push(todo);
    localStorage.setItem('todos' , JSON.stringify(items));
}

//loading todos
function loadTodos() {
    const stored = localStorage.getItem('todos');
    items = stored ? JSON.parse(stored) : [];
    items.forEach((t) => addToDom(t));
};


//remove from localStorage
function removeTodo(todo) {
    const stored = localStorage.getItem('todos');
    if (stored) {
        items = JSON.parse(stored)
    };
    const newItems = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== todo) {
            newItems.push(items[i]);
        };
    };

    localStorage.setItem('todos' , JSON.stringify(newItems));

};

loadTodos();

