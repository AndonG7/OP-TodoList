import "./styles.css";
import { displayProjects } from "./scripts/displayProjects";
import { displayTasks } from "./scripts/displayTasks";
import { addProject } from "./scripts/addProject";
import { defaultActive } from "./scripts/ActiveProject";
import { addTask } from "./scripts/addTask";
import { inputValueRemove } from "./scripts/inputValueRemove";
import { projectss } from "./scripts/projectss";
import { removeTask } from "./scripts/removeTask";

displayProjects(projectss);
displayTasks(0);
addProject();
defaultActive(0);
addTask();
inputValueRemove();
removeTask();
