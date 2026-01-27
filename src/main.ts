import { myProjects } from "./data/projectList";
import "./scss/style.scss";
import { HtmlForContact } from "./Utils/contactHTML";
import { HtmlForProjects } from "./Utils/projectsHTML";

HtmlForProjects(myProjects);
HtmlForContact();
