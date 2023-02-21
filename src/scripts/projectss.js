import { Project } from "./Project";

export let projectss = [];

/// Some values for projects and todos ///
projectss.push(new Project("Main"));
projectss.push(new Project("Secondary"));

projectss[0].addTodo("Kompjuter", "Vkluci PC", "12.03.2023", "medium");
projectss[0].addTodo("Rucek", "Napravi rucek", "13.03.2023", "high");
projectss[0].addTodo("Kola", "Iscisti kola", "12.03.2023", "low");

projectss[1].addTodo("Trening", "Odi da vezbas", "13.03.2023", "high");
//////////////////////////////////////////
