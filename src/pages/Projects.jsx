import recipeRolo from "../assets/project-images/recipe-rolodex.png"
import operaLanding from "../assets/project-images/opera-landing-page.png"
import workRemote from "../assets/project-images/work-remote.png"
// import placeHolder from "../assets/project-images/placeholder.webp"
import noteTaker from "../assets/project-images/note-taker.png"
import sceneryFinder from "../assets/project-images/scenery-finder.png"
import employeeTracker from "../assets/project-images/employee-tracker.png"


function Projects() {
const recipeRoloLink = "https://recipe-rolodex-d7c0cb19d5d1.herokuapp.com/";
const operaLandingLink = "https://operabook.netlify.app/";
const workRemoteLink = "https://work-remote-jsn-4d3b6593bab7.herokuapp.com/";
const noteTakerLink = "https://evie-note-taker-071f3e8ace6d.herokuapp.com/";
const sceneryFinderLink="https://eviehoang.github.io/scenery-finder/"
const employeeTrackerLink= "https://github.com/eviehoang/employee-tracker";

  return (
    <section className="flex items-center flex-wrap justify-center m-8 px-8 z-40">
      <div className="m-auto container mb-0">
        <h1 id="projectHeading">Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-0 gap-9 py-12 w-5/6">
      <a href={employeeTrackerLink} className="projectCard">
          <figure>
          <img src={employeeTracker} alt="Employee Tracker" />
            <figcaption>Employee Tracker
            <p className="mt-3">This system is designed to operate within the terminal and is powered by MYSQL2, JavaScript, and Inquirer. The program allows use to view all employees, departments, and roles.</p>
            <p className="text-right">See Repo &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href={noteTakerLink} className="projectCard">
          <figure>
          <img src={noteTaker} alt="Note Taker Application" />
            <figcaption>Note Taker
            <p className="mt-3">A simple Express.js application for managing and retrieving notes. API routes handle reading, creating, and deleting notes from a JSON file (db.json). The code uses the uuid library to generate unique IDs for notes.</p>
            <p className="text-right">See Deployed &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href={sceneryFinderLink} className="projectCard">
          <figure>
          <img src={sceneryFinder} alt="Scenery Finder Site" />
            <figcaption>Scenery Finder
            <p className="mt-3">Scenery Finder is a user-friendly application that seamlessly combines two APIs and three libraries to help users quickly discover parks and activities in their chosen cities.</p>
            <p className="text-right">See Deployed &gt;</p>
            </figcaption>
          </figure>
        </a>

        <a href={recipeRoloLink} className="projectCard">
          <figure>
            <img src={recipeRolo} alt="Recipe Rolodex Site" />
            <figcaption>Recipe Rolodex
            <p className="mt-3">Recipe Rolodex, created with REACT, and Bootstrap Material Design.</p>
            <p className="text-right">See Deployed &gt;</p>
            </figcaption>
          </figure>
        </a>

        <a href={workRemoteLink} className="projectCard">
          <figure>
          <img src={workRemote} alt="Work Remote Site" />
            <figcaption>Work Remote
            <p className="mt-3">An application created with Node.js, MySQL, Sequelize, Handlebars, and Bootstrap Material Design.</p>
            <p className="text-right">See Deployed &gt;</p>
            </figcaption>  
          </figure>
        </a>

        <a href={operaLandingLink} className="projectCard">
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
