import { projectss } from "./projectss";
const tasks = document.querySelector('.tasks-container');

export function displayTasks(_active) {
    tasks.innerHTML = "";

    for (let i=0; i<projectss[_active].todos.length; i++){
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <div class="check"><button class="remove p${_active} t${i}"></button></div>
            <div class="ttile task-item"><strong>Title:</strong> ${projectss[_active].todos[i].title}</div>
            <div class="tdescription task-item"><strong>Description:</strong> ${projectss[_active].todos[i].description}</div>
            <div class="tdate task-item"><strong>Due:</strong> ${projectss[_active].todos[i].dueDate}</div>
            <div class="tpriority task-item"><strong>Priority:</strong> ${projectss[_active].todos[i].priority}</div>
        `;
        tasks.appendChild(task);

    }
}