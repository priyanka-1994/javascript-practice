// Get references to your HTML elements
// We need to access the input field where the user types tasks,
// and the unordered list (<ul>) where the tasks will be displayed.
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// This function is called when the "Add" button is clicked (from onclick="addTask()" in HTML)
function addTask() {
    // 1. Get the text the user typed in the input field
    //    .value gets the current text. .trim() removes any empty spaces from beginning/end.
    const taskText = taskInput.value.trim();

    // 2. Basic validation: Don't add empty tasks
    if (taskText === '') {
        alert('Please enter a task!'); // Simple alert for empty input
        return; // Stop the function here if the input is empty
    }

    // --- Create a new <li> element for the task ---
    const listItem = document.createElement('li');

    // --- Create a checkbox for marking task as complete ---
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Set the input type to 'checkbox'
    checkbox.classList.add('task-checkbox'); // Add a class for CSS styling

    // Attach an event listener to the checkbox
    // This function runs whenever the checkbox's state changes (checked or unchecked)
    checkbox.onchange = function() {
        // 'this' refers to the checkbox that was clicked.
        // 'this.nextElementSibling' refers to the HTML element immediately following the checkbox.
        // In our case, this is the <span> element that holds the task text.
        // .classList.toggle('className', condition) adds 'className' if condition is true, removes it if false.
        this.nextElementSibling.classList.toggle('completed', this.checked);
    };

    // --- Create a <span> element for the task text ---
    // We use a span so we can apply styles like line-through specifically to the text,
    // and manage its flexibility within the list item's flex container.
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // Set the actual task text
    taskSpan.classList.add('task-text'); // Add a class for CSS styling

    // --- Create a delete button ---
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Unicode 'X' for a simple delete icon
    deleteButton.classList.add('delete-btn'); // Add a class for CSS styling

    // Attach an event listener to the delete button
    // This function runs when the delete button is clicked
    deleteButton.onclick = function() {
        // 'this' refers to the delete button that was clicked.
        // 'this.parentNode' refers to the immediate parent of the button, which is the <li> element.
        // 'taskList.removeChild()' removes a child element from the taskList (the <ul>).
        taskList.removeChild(this.parentNode);
    };

    // --- Assemble the listItem ---
    // Append the checkbox, task text span, and delete button to the <li>
    // The order here determines their visual order in the list item.
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // --- Add the new listItem to the taskList (the <ul> on the page) ---
    // This is the step that makes the newly created <li> visible on the webpage.
    taskList.appendChild(listItem);

    // --- Clean up after adding a task ---
    taskInput.value = ''; // Clear the input field
    taskInput.focus(); // Set focus back to the input field so the user can quickly type the next task
}
