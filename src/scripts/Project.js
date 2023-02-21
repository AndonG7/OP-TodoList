import { Todo } from "./Todo";

export class Project{

    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority) {
        this.todos.push(new Todo(title, description, dueDate, priority));
    }

  }
