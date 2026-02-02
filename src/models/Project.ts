export class Project {
  img: string;
  title: string;
  info: string;
  githublink: string;
  liveDemoLink: string;

  constructor(
    img: string,
    title: string,
    info: string,
    githublink: string,
    liveDemoLink: string,
  ) {
    this.img = img;
    this.title = title;
    this.info = info;
    this.githublink = githublink;
    this.liveDemoLink = liveDemoLink;
  }
}
