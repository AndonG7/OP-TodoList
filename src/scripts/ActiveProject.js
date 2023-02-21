import { displayTasks } from "./displayTasks";
import { removeTask } from "./removeTask";

export let active = 0;

export function defaultActive(_numberOfProject) {
    document.querySelector(`.p${_numberOfProject}`).classList.add('active-project');
}

export function setActive() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((element) => {
        element.addEventListener('click', function(){
            allProjects.forEach((el) => {
                el.classList.remove('active-project');
            });
            element.classList.add('active-project');
            active = element.className[9];
            displayTasks(active);
            removeTask();
        });
      });
}

