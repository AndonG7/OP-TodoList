import { active } from "./ActiveProject";
import { projectss } from "./projectss";
import { displayTasks } from "./displayTasks";
import { removeTask } from "./removeTask";
const submitTaskButton = document.querySelector('.submit');


export function addTask() {
    submitTaskButton.addEventListener('click', function() {
        const title = document.querySelector('.fname').value;
        const description = document.querySelector('.fdescription').value;
        const dueDate = document.querySelector('.fdate').value;
        const priority = document.querySelector('.fpriority').value;

        if (title != 'Task Name Here...' && description != 'Description of your task...' &&
            dueDate != "Enter Date" && priority != "default") {
            projectss[active].addTodo(title, description, dueDate, priority);
            displayTasks(active);
        }
    
        removeTask();
    });
}