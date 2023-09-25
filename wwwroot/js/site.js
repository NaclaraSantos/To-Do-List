// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }
}

// Função para renderizar as tarefas na lista
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Excluir</button>
        `;
        taskList.appendChild(li);
    });
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Inicialize a lista de tarefas
renderTasks();
