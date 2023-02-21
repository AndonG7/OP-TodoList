import { newProjectButton } from "./displayProjects";
import { projectss } from "./projectss";
import {Project} from './Project.js';
import { displayProjects } from "./displayProjects";
import { defaultActive } from "./ActiveProject";
import { active } from "./ActiveProject";

const addProjectContainer = document.querySelector('.add-project-container');
const addProjectInput = document.querySelector('.project-name');
const enterProjectButton = document.querySelector('.enter');

export function addProject() {
    //Open New Project Form
    newProjectButton.addEventListener('click', function() {
        addProjectContainer.style.visibility = "visible";
    });

    //Get input then close form, reload projects, set active project to how it was before reloading 
    enterProjectButton.addEventListener('click', function(){
        if (addProjectInput.value != "") {
            projectss.push(new Project(addProjectInput.value));
            addProjectContainer.style.visibility = "hidden";
            displayProjects(projectss);
            defaultActive(active);
        }
    });

}


