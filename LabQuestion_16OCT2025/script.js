let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    tasks.push(taskText);
    input.value = "";
    displayTasks();
}

function displayTasks() {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Mark Complete";
        completeBtn.title = "Mark task as complete";
        completeBtn.onclick = () => {
            li.classList.add("completed");
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.title = "Delete this task";
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}
