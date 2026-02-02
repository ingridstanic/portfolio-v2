import { Project } from "../models/Project";

const toDo: Project = new Project(
  "assets/To-do.png",
  "To Do",
  "A simple to-do app for managing tasks with sorting, completion and delete actions.",
  "https://github.com/ingridstanic/To-do-list",
  "https://to-do-list-kohl-eta-95.vercel.app/",
);
const coffeeShop: Project = new Project(
  "assets/CoffeeShop.png",
  "Coffeeshop",
  "A fictional coffee shop website developed as a school assignment to practice frontend fundamentals",
  "https://github.com/ingridstanic/CoffeeShop",
  "https://gorgeous-marshmallow-4c7860.netlify.app/",
);
const project3: Project = new Project(
  "assets/placeholder.png",
  "Lorem Ipsum",
  "dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "placeholder",
  "placeholder",
);
const project4: Project = new Project(
  "assets/placeholder.png",
  "Lorem Ipsum",
  "dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "placeholder",
  "placeholder",
);

export const myProjects: Project[] = [toDo, coffeeShop, project3, project4];
