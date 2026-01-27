import type { Project } from "../models/Project";

export const HtmlForProjects = (myProjects: Project[]) => {
  const projectContainer = document.getElementById("projects-container");
  if (!projectContainer) return;

  myProjects.forEach((project) => {
    //Create element
    const projectCard = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const infoContainer = document.createElement("div");
    const title = document.createElement("h2");
    const info = document.createElement("p");
    const linkContainer = document.createElement("div");
    const link = document.createElement("a");

    //Change element
    projectCard.className = "projectCard";
    imgContainer.className = "imgContainer";
    img.src = project.img;
    img.alt = "Preview image";
    infoContainer.className = "infoContainer";
    title.innerHTML = project.title;
    info.innerHTML = project.info;
    linkContainer.className = "linkContainer";
    link.innerHTML = "view on github";
    link.href = project.githublink;
    link.target = "_blank";

    //Place element
    imgContainer.appendChild(img);
    linkContainer.appendChild(link);
    infoContainer.appendChild(title);
    infoContainer.appendChild(info);
    infoContainer.appendChild(linkContainer);

    projectCard.appendChild(imgContainer);
    projectCard.appendChild(infoContainer);

    projectContainer.appendChild(projectCard);
  });
};
