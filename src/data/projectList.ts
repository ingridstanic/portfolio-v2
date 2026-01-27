import { Project } from "../models/Project";

const toDo: Project = new Project(
  "assets/To-do.png",
  "To Do",
  "A simple to-do app for managing tasks with sorting, completion and delete actions.",
  "https://github.com/ingridstanic/To-do-list",
);
const coffeeShop: Project = new Project(
  "assets/CoffeeShop.png",
  "Coffeeshop",
  "A fictional coffee shop website developed as a school assignment to practice frontend fundamentals",
  "placeholder",
);
const project3: Project = new Project(
  "assets/placeholder.png",
  "Lorem Ipsum",
  "dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "placeholder",
);
const project4: Project = new Project(
  "assets/placeholder.png",
  "Lorem Ipsum",
  "dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "placeholder",
);

export const myProjects: Project[] = [toDo, coffeeShop, project3, project4];
