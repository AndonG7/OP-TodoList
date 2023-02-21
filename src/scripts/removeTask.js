import { projectss } from "./projectss";
import { displayTasks } from "./displayTasks";
import { active } from "./ActiveProject";

export function removeTask() {
    let removeButtons = document.querySelectorAll('.remove');

    removeButtons.forEach(element => {
        element.addEventListener('click', function() { 
            const removeTask = element.className[11];
            const removeProject = element.className[8];

            console.log("Click");
            projectss[removeProject].todos.splice(removeTask, 1);
            displayTasks(active);
            reload();
        });
    });
}

function reload() {
    removeTask();
}