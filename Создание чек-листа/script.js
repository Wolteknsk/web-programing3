function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Пожалуйста, введите дело!");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}