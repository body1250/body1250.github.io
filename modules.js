/* <section class="con-projects">
  <div class="project_div">
    <div class="img">
      <img
        src="images/bootstrap-course-interface.png"
        alt="some text and two tables"/>
    </div>
    <h3>bootstrap course</h3>
    <p>bootstrap course interface made with only bootstrap library</p>
    <a
      class="projectButton"
      target="_blank"
      href="https://body1250.github.io/bootstrap-course-interface/">
      My projects
    </a>
  </div>
</section>; */

export function makeskill(
  imgsource,
  alt,
  nameofproject,
  description,
  link,
  skills = []
) {
  let con_projects = document.querySelector(".con-projects");

  let SkillColor = {
    HTML: "#E34F26",
    CSS: "#264DE4",
    JavaScript: "#F7DF1E",
    Django: "#092E20",
    SQL: "#00758F",
  };

  let con_skills = document.createElement("div");
  con_skills.classList.add("con-skills");
  skills.forEach((skill) => {
    let skillbox = document.createElement("div");
    skillbox.textContent = skill;
    skillbox.style.backgroundColor = SkillColor[skill];
    con_skills.appendChild(skillbox);
});
let project_div = document.createElement("div");
project_div.className = "project_div";



let divimg = document.createElement("div");
divimg.className = "img";

let img = document.createElement("img");
img.setAttribute("src", imgsource);
img.setAttribute("alt", alt);

// add the img to its div
divimg.appendChild(img);

// add the divimg to the project_div div
project_div.appendChild(divimg);

let name = document.createElement("h3");
name.innerText = nameofproject;

//add the project_div to the div of project
project_div.append(con_skills)


// add the name of project to the project_div div
project_div.appendChild(name);

let thedescription = document.createElement("p");
thedescription.innerText = description;
// add the description of project to the project_div div
project_div.appendChild(thedescription);

let thelink = document.createElement("a");
thelink.className = "projectButton";
thelink.setAttribute("target", "_blank");
thelink.setAttribute("href", link);
thelink.innerText = "My projects";
// add the link to the div project_div
project_div.appendChild(thelink);

con_projects.appendChild(project_div);
}
