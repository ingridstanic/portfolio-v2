import { Project } from "../models/Project";

const project1: Project = new Project(
  "placeholder",
  "To Do",
  "A simple to-do app for managing tasks with sorting, completion and delete actions.",
  "https://github.com/ingridstanic/To-do-list",
);
const project2: Project = new Project(
  "placeholder",
  "Coffeeshop",
  "A fictional coffee shop website developed as a school assignment to practice frontend fundamentals",
  "placeholder",
);
const project3: Project = new Project(
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
);
const project4: Project = new Project(
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
);

export const myProjects: Project[] = [project1, project2, project3, project4];
