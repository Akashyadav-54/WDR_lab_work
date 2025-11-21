let tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const taskObj = {
        id: Date.now(),
        name: taskText,
        completed: false
    };

    tasks.push(taskObj);
    input.value = "";
    displayTasks();
});

// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const div = document.createElement("div");
        div.className = "task-box";

        const textEl = document.createElement("span");
        textEl.textContent = task.name;

        if (task.completed) {
            textEl.style.color = "green";
        }

        const btnContainer = document.createElement("div");

        // COMPLETE BUTTON
        const completeBtn = document.createElement("button");
        completeBtn.className = "complete-btn";
        completeBtn.textContent = task.completed ? "Completed" : "Mark as Complete";
        completeBtn.disabled = task.completed;

        completeBtn.addEventListener("click", () => {
            task.completed = true;
            displayTasks();
        });

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id);
            displayTasks();
        });

        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(deleteBtn);

        div.appendChild(textEl);
        div.appendChild(btnContainer);

        taskList.appendChild(div);
    });
}
