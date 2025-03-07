{/* <section class="con-skills">
  <div class="skill">
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
</section>; */}

export function makeskill(imgsource, alt, nameofproject, description, link){

    let con_skills = document.querySelector('.con-skills')
    let skill = document.createElement("div")
    skill.className = 'skill'

    let divimg = document.createElement("div")
    divimg.className = "img"

    let img = document.createElement('img')
    img.setAttribute('src',imgsource)
    img.setAttribute('alt',alt)

    // add the img to its div
    divimg.appendChild(img)

    // add the divimg to the skill div
    skill.appendChild(divimg)

    let name = document.createElement('h3')
    name.innerText = nameofproject
    // add the name of project to the skill div
    skill.appendChild(name)

    let thedescription = document.createElement('p')
    thedescription.innerText = description
    // add the description of project to the skill div
    skill.appendChild(thedescription)

    let thelink = document.createElement("a")
    thelink.className = 'projectButton'
    thelink.setAttribute('target' , '_blank')
    thelink.setAttribute('href' , link)
    thelink.innerText = 'My projects'
    // add the link to the div skill
    skill.appendChild(thelink)


    con_skills.appendChild(skill)
    
}

makeskill('images/google-search.png','search photo',"Google Search","search by google search with the advanced search and image search",'https://body1250.github.io/google-search/')
makeskill('images/coffee-world.png','coffe shop photo',"Coffee shop","a store sells coffee products and coffee making tools",'https://body1250.github.io/coffee-world/')
makeskill('images/replace-text.png','text photo',"replace text","write a paragraph an search about any word or letters and know how many times it repeats",'https://body1250.github.io/replace-text/')
makeskill('images/book-store.png','table and some buttons photo',"Book store","add and delete books from the store if you are owner and buy and show details about the book if you are the owner of the store !",'https://body1250.github.io/book-store/')
makeskill('images/page-with-js.png','some blocks name product with numbers',"page with JS","a page has made by only JS",'https://body1250.github.io/page-with-JS/')
makeskill('images/add-delete-tasks.png','small input with three tasks',"add and delete tasks","add and delete tasks with an input and delete button ",'https://body1250.github.io/add-and-delete-tasks/')
makeskill('images/bootstrap-course-interface.png','some text and two tables',"bootstrap course","bootstrap course interface made with only bootstrap library",'https://body1250.github.io/bootstrap-course-interface/')
makeskill('images/css-course-interface.png','header and button and some text',"CSS course interface","CSS course interface made with css",'https://body1250.github.io/CSS-course-interface/')
makeskill('images/add-delete-classes.png','two inputs and two blocks',"add and delete classes","add and delete classes by write the name of the class to add or delete",'https://body1250.github.io/add-and-delete-classes/')
makeskill('images/leon-template.png','a header and three half blocks',"leon template","a template to show your projects and your features",'https://body1250.github.io/leon-template/')
makeskill('images/kasper-template.png','an owl and three points in the bottom',"kasper template","a template to show your protoflio and your features with three plans to subscribe",'https://body1250.github.io/kasper-template/')
