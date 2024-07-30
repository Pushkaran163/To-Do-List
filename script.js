// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to the form
todoForm.addEventListener('submit', addTodo);

// Function to add a to-do item
function addTodo(event) {
    event.preventDefault();
    
    // Get the value of the input
    const todoText = todoInput.value;
    
    // Create a new list item
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <button onclick="deleteTodo(this)">Delete</button>
    `;
    
    // Add click event to mark the task as completed
    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    // Add the new item to the list
    todoList.appendChild(todoItem);
    
    // Clear the input
    todoInput.value = '';
}

// Function to delete a to-do item
function deleteTodo(button) {
    const todoItem = button.parentElement;
    todoList.removeChild(todoItem);
}