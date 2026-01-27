export class Project {
  img: string;
  title: string;
  info: string;
  githublink: string;

  constructor(img: string, title: string, info: string, githublink: string) {
    this.img = img;
    this.title = title;
    this.info = info;
    this.githublink = githublink;
  }
}
