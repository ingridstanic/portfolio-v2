import type { Project } from "../models/Project";

export const HtmlForProjects = (myProjects: Project[]) => {
  const projectContainer = document.getElementById("projects");
  if (!projectContainer) return;

  myProjects.forEach((project) => {
    //Create element
    const projectCard = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const infoContainer = document.createElement("div");
    const title = document.createElement("h2");
    const info = document.createElement("p");
    const link = document.createElement("a");

    //Change element
    projectCard.className = "projectCard";
    imgContainer.className = "imgContainer";
    img.src = project.img;
    img.alt = "Preview image";
    infoContainer.className = "infoContainer";
    title.innerHTML = project.title;
    info.innerHTML = project.info;
    link.innerHTML = project.githublink;

    //Place element
    imgContainer.appendChild(img);
    infoContainer.appendChild(title);
    infoContainer.appendChild(info);
    infoContainer.appendChild(link);

    projectCard.appendChild(imgContainer);
    projectCard.appendChild(infoContainer);

    projectContainer.appendChild(projectCard);
  });
};
