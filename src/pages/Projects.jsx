import recipeRolo from "../assets/project-images/recipe-rolodex.png"
import operaLanding from "../assets/project-images/opera-landing-page.png"


function Projects() {
  return (
    <section className="flex items-center flex-wrap justify-center m-8 px-8 z-40">
      <div className="m-auto container mb-0">
        <h1 id="projectHeading">Projects</h1>
      </div>

      <div className="flex flex-wrap flex-reverse justify-center mt-0 gap-9 py-12 w-5/6">
        <a href="https://recipe-rolodex-d7c0cb19d5d1.herokuapp.com/" className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Recipe Rolodex Site" />
            <figcaption>Recipe Rolodex
            <p className="mt-3">Recipe Rolodex, created with REACT, and Bootstrap Material Design.</p>
            <p className="text-right">See More &gt;</p>
            </figcaption>
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Work Remote Site" />
            <figcaption>Work Remote
            <p className="mt-3">An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            <p className="text-right">See More &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/" className="projectCard">
          <figure>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Work Remote Site" />
            <figcaption>Work Remote
            <p className="mt-3">An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            <p className="text-right">See More &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="projectCard">
          <figure>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Work Remote Site" />
            <figcaption>Recipe Rolodex
            <p className="mt-3">Recipe Rolodex, created with REACT, and Bootstrap Material Design.</p>
            <p className="text-right">See More &gt;</p>
            </figcaption>
          </figure>
        </a>

        <a href="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="projectCard">
          <figure>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Work Remote Site" />
            <figcaption>Work Remote
            <p className="mt-3">An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            <p className="text-right">See More &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="projectCard">
          <figure>
            <img src={operaLanding} alt="Opera Landing Page" />
            <figcaption>Landing Page: Pre-launch
            <p className="mt-3">A client requested landing page for an Opera Project. Built with JAVASCRIPT, CSS, and HTML.</p>
            <p className="text-right">See Deployed &gt;</p>
            </figcaption>  
          </figure>
        </a>
      </div>
    </section>
  );
}

export default Projects;
