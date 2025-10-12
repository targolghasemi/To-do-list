const form = document.getElementById('form');
const input = document.getElementById('input');
const addItem = document.getElementById('add-item');


let items = [];

//adding tasks
function addToDom(text) {
    const li = document.createElement('li');

    const span = document.createElement('span'); // for text
    span.textContent = text;

    const btn = document.createElement('button'); // for deleting item
    btn.textContent = "Delete";
    btn.classList.add('delete-btn'); 

}