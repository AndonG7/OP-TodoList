import { setActive } from "./ActiveProject";

const projects = document.querySelector('.projects-container');
export const newProjectButton = document.createElement('button');
newProjectButton.classList.add('add-project');

newProjectButton.innerHTML = "New Project";

export function displayProjects(_projects) {
    projects.innerHTML = "";

    for (let i=0; i<_projects.length; i++){
        const project = document.createElement('div');
        project.classList.add('project');
        project.classList.add(`p${i}`);
        project.innerHTML = `
            <div class="pname">${_projects[i].name}</div>
        `;
        projects.appendChild(project);
    }

    projects.appendChild(newProjectButton);
    setActive();
    
}