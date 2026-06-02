import { makeskill } from './modules.js';
import { Projects } from './modules.js';
Projects.allProjects.forEach(project => {
  makeskill(project);
});



  let searchinput = document.querySelector('#projectsearch')
  let elements = document.querySelectorAll(".con-projects .project_div");
  let shownumber = document.querySelector('#numOfItems')
  shownumber.innerHTML = elements.length
  
  searchinput.addEventListener('input',()=>{
    let projectsName= document.querySelectorAll('.con-projects h3')
    let search = searchinput.value.toLowerCase()
    
    // console.log(projects)
    // let numOfProjects = projects.length
    projectsName.forEach(project => {
      let text = project.textContent.toLowerCase()
      if(text.includes(search)){
        project.parentNode.style.display = 'block'
      }else{
        project.parentNode.style.display = 'none'
      }
    });
    // add the number of project showes in the site
    let projects = [...elements].filter(el => { 
      return getComputedStyle(el).display === "block";
    });
    shownumber.innerHTML = projects.length
    if (projects.length == '1'){
      document.querySelector('#S').innerHTML=''
      document.querySelector('#are').innerHTML='is'
    }else{
      document.querySelector('#S').innerHTML='s'
      document.querySelector('#are').innerHTML='are'
      
    }
    
    

        })

