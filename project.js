import { makeskill } from './modules.js';
makeskill('images/google-search.png','search photo',"Google Search","search by google search with the advanced search and image search",'https://body1250.github.io/google-search/',['HTML','CSS'])
makeskill('images/coffee-world.png','coffe shop photo',"Coffee shop","a store sells coffee products and coffee making tools",'https://body1250.github.io/coffee-world/' ,['HTML','CSS','JavaScript'])
makeskill('images/replace-text.png','text photo',"replace text","write a paragraph an search about any word or letters and know how many times it repeats",'https://body1250.github.io/replace-text/',['HTML','CSS','JavaScript'])

  makeskill('images/book-store.png','table and some buttons photo',"Book store","add and delete books from the store if you are owner and buy and show details about the book if you are the owner of the store !",'https://body1250.github.io/book-store/',['HTML','CSS','JavaScript'])
  makeskill('images/page-with-js.png','some blocks name product with numbers',"page with JS","a page has made by only JS",'https://body1250.github.io/page-with-JS/',['CSS','JavaScript'])
  makeskill('images/add-delete-tasks.png','small input with three tasks',"add and delete tasks","add and delete tasks with an input and delete button ",'https://body1250.github.io/add-and-delete-tasks/',['HTML','CSS','JavaScript'])
  makeskill('images/bootstrap-course-interface.png','some text and two tables',"bootstrap course","bootstrap course interface made with only bootstrap library",'https://body1250.github.io/bootstrap-course-interface/',['HTML','CSS'])
  makeskill('images/css-course-interface.png','header and button and some text',"CSS course interface","CSS course interface made with css",'https://body1250.github.io/CSS-course-interface/',['HTML','CSS'])
  makeskill('images/add-delete-classes.png','two inputs and two blocks',"add and delete classes","add and delete classes by write the name of the class to add or delete",'https://body1250.github.io/add-and-delete-classes/',['HTML','CSS','JavaScript'])
  makeskill('images/leon-template.png','a header and three half blocks',"leon template","a template to show your projects and your features",'https://body1250.github.io/leon-template/',['HTML','CSS'])
  makeskill('images/kasper-template.png','an owl and three points in the bottom',"kasper template","a template to show your protoflio and your features with three plans to subscribe",'https://body1250.github.io/kasper-template/',['HTML','CSS'])
  
let searchinput = document.querySelector('#projectsearch')
let projects= document.querySelectorAll('.con-projects h3')
console.log(projects)

searchinput.addEventListener('input',()=>{
  let search = searchinput.value.toLowerCase()
  projects.forEach(project => {
    let text = project.textContent.toLowerCase()
    if(text.includes(search)){
      project.parentNode.style.display = 'block'
      }
      else{
        project.parentNode.style.display = 'none'
        }
        });
        })