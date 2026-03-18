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
const crudAPI: Project = new Project(
  "assets/CrudApi.png",
  "CRUD API",
  "REST API for a webshop built with Node.js, Express, and MongoDB with admin dashboard.",
  "https://github.com/ingridstanic/myAPIproject",
  "",
);
const StarWarsQuiz: Project = new Project(
  "assets/greenYoda.svg",
  "Star Wars Quiz",
  "An interactive Star Wars quiz that tests knowledge and displays custom ranks based on the score.",
  "https://github.com/ingridstanic/quiz/tree/main",
  "https://aswquiz.netlify.app/",
);

export const myProjects: Project[] = [toDo, coffeeShop, crudAPI, StarWarsQuiz];
