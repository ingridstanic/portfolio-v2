export const HtmlForContact = () => {
  const contactContainer = document.getElementById("contact-container");
  if (!contactContainer) return;

  //Create element
  const businessCard = document.createElement("div");
  const logoContainer = document.createElement("div");
  const logo = document.createElement("img");
  const contactInfo = document.createElement("div");
  const fullName = document.createElement("h2");
  const title = document.createElement("h3");
  const email = document.createElement("a");
  const linkContainer = document.createElement("div");
  const github = document.createElement("a");
  const linkedin = document.createElement("a");

  //Edit element
  businessCard.className = "businessCard";
  logoContainer.className = "logoContainer";
  logo.src = "assets/Logo.svg";
  logo.alt = "Ingrid Stanic logo";
  contactInfo.className = "contactInfo";
  fullName.innerHTML = "Ingrid Stanic";
  title.innerHTML = "Frontend Developer";
  email.innerHTML = "ingrid.stanic@medieinstitutet.se";
  email.href = "mailto:ingrid.stanic@medieinstitutet.se";
  linkContainer.className = "linkContainer";
  github.href = "https://github.com/ingridstanic";
  github.innerHTML = `<img src="assets/github2.svg">`;
  github.target = "_blank";
  linkedin.href = "https://www.linkedin.com/in/ingrid-stanic-5b57aa281/";
  linkedin.innerHTML = `<img src="assets/linkedin2.svg">`;
  linkedin.target = "_blank";

  //Place element
  logoContainer.appendChild(logo);
  linkContainer.appendChild(linkedin);
  linkContainer.appendChild(github);
  contactInfo.appendChild(fullName);
  contactInfo.appendChild(title);
  contactInfo.appendChild(email);
  contactInfo.appendChild(linkContainer);

  businessCard.appendChild(logoContainer);
  businessCard.appendChild(contactInfo);

  contactContainer.appendChild(businessCard);
};
