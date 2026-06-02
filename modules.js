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

export class Projects {
//static property to save all project in the class
  static allProjects =[]
  static importantProjects =[]

  constructor(imgsource, alt, nameofproject, description, link, skills, isImportant =false) {
    this.imgsource = imgsource;
    this.alt = alt;
    this.nameofproject = nameofproject;
    this.description = description;
    this.link = link;
    this.skills = skills;
    // add the project the the static property
    Projects.allProjects.push(this)
    if (isImportant){Projects.importantProjects.push(this)}
  }
}

//creat my projects
new Projects(
  'images/google-search.png',
  'search photo',
  'Google Search',
  'search by google search with the advanced search and image search',
  'https://body1250.github.io/google-search/',
  ['HTML', 'CSS'],
  true
);

new Projects(
  'images/coffee-world.png',
  'coffe shop photo',
  'Coffee shop',
  'a store sells coffee products and coffee making tools',
  'https://body1250.github.io/coffee-world/',
  ['HTML', 'CSS', 'JavaScript'],
  true
);

new Projects(
  'images/replace-text.png',
  'text photo',
  'replace text',
  'write a paragraph an search about any word or letters and know how many times it repeats',
  'https://body1250.github.io/replace-text/',
  ['HTML', 'CSS', 'JavaScript'],true
);

new Projects(
  'images/book-store.png',
  'table and some buttons photo',
  'Book store',
  'add and delete books from the store if you are owner and buy and show details about the book if you are the owner of the store !',
  'https://body1250.github.io/book-store/',
  ['HTML', 'CSS', 'JavaScript']
);

new Projects(
  'images/page-with-js.png',
  'some blocks name product with numbers',
  'page with JS',
  'a page has made by only JS',
  'https://body1250.github.io/page-with-JS/',
  ['CSS', 'JavaScript']
);

new Projects(
  'images/add-delete-tasks.png',
  'small input with three tasks',
  'add and delete tasks',
  'add and delete tasks with an input and delete button ',
  'https://body1250.github.io/add-and-delete-tasks/',
  ['HTML', 'CSS', 'JavaScript']
);

new Projects(
  'images/bootstrap-course-interface.png',
  'some text and two tables',
  'bootstrap course',
  'bootstrap course interface made with only bootstrap library',
  'https://body1250.github.io/bootstrap-course-interface/',
  ['HTML', 'CSS']
);

new Projects(
  'images/css-course-interface.png',
  'header and button and some text',
  'CSS course interface',
  'CSS course interface made with css',
  'https://body1250.github.io/CSS-course-interface/',
  ['HTML', 'CSS']
);

new Projects(
  'images/add-delete-classes.png',
  'two inputs and two blocks',
  'add and delete classes',
  'add and delete classes by write the name of the class to add or delete',
  'https://body1250.github.io/add-and-delete-classes/',
  ['HTML', 'CSS', 'JavaScript']
);

new Projects(
  'images/leon-template.png',
  'a header and three half blocks',
  'leon template',
  'a template to show your projects and your features',
  'https://body1250.github.io/leon-template/',
  ['HTML', 'CSS']
);

new Projects(
  'images/kasper-template.png',
  'an owl and three points in the bottom',
  'kasper template',
  'a template to show your protoflio and your features with three plans to subscribe',
  'https://body1250.github.io/kasper-template/',
  ['HTML', 'CSS']
);



export function makeskill(project) {
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
  //take the skills from the object to put in the container of skills
  project.skills.forEach((skill) => {
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
//add "alt" and "src" to the skill
img.setAttribute("src", project.imgsource);
img.setAttribute("alt", project.alt);

// add the img to its div
divimg.appendChild(img);

// add divimg to the project_div div
project_div.appendChild(divimg);

let name = document.createElement("h3");
//add the name to the project
name.innerText = project.nameofproject;

//add the project_div to the div of project
project_div.append(con_skills)


// add the name of project to the project_div div
project_div.appendChild(name);

let thedescription = document.createElement("p");
thedescription.innerText = project.description;
// add the description of project to the project_div div
project_div.appendChild(thedescription);

let thelink = document.createElement("a");
thelink.className = "projectButton";
thelink.setAttribute("target", "_blank");
thelink.setAttribute("href", project.link);
thelink.innerText = "SHOW";
// add the link to the div project_div
project_div.appendChild(thelink);

con_projects.appendChild(project_div);
}
