let form = document.getElementById('form');
let items = [];


//to store items in local storage
function storeItem(item) {
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));
};
//to display items in the Dom
function displayItems(todoInput) {
    let todoItem = document.createElement('li');
    todoItem.innerHTML = todoInput;
    let todoList = document.querySelector('ul');
    todoList.appendChild(todoItem);
}