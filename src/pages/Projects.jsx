import recipeRolo from "../assets/project-images/recipe-rolodex.png"
// import workRemote from "../assets/project-images/work-remote.png"
import noteTaker from "../assets/project-images/note-taker.png"

function Projects() {
  return (
    <section className="flex items-center flex-wrap justify-center m-8 px-8 z-40 gap-4">
      <div className="m-auto container mb-0">
        <h1 id="projectHeading">Projects</h1>
      </div>

      <div className="flex flex-wrap justify-between mt-0 gap-5 glassBox p-8">
        <a href="https://recipe-rolodex-d7c0cb19d5d1.herokuapp.com/" className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Recipe Rolodex Site" />
            <figcaption>Recipe Rolodex
            <p>Recipe Rolodex, created with REACT, and Bootstrap Material Design.</p>
            </figcaption>
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Work Remote Site" />
            <figcaption>Work Remote
            <p>An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
            <img src={noteTaker} alt="Work Remote Site" />
            <figcaption>Work Remote
            <p>An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://recipe-rolodex-d7c0cb19d5d1.herokuapp.com/" className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Recipe Rolodex Site" />
            <figcaption>Recipe Rolodex
            <p>Recipe Rolodex, created with REACT, and Bootstrap Material Design.</p>
            </figcaption>
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Work Remote Site" />
            <figcaption>Work Remote
            <p>An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
            <img src={noteTaker} alt="Work Remote Site" />
            <figcaption>Work Remote
            <p>An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            </figcaption>  
          </figure>
        </a>
      </div>
    </section>
  );
}

export default Projects;
