import Info from "../components/info-card";
import Skills from "../components/skills";
import ProjectTabs from "../components/project-tabs";

function Home() {
  return (
    <section>
      <div className="flex items-end justify-center m-20 space-x-12">
        <Info />
        <Skills />
      </div>

      <div className="flex justify-center m-20 space-x-12">
        <ProjectTabs />
      </div>
    </section>
  );
}

export default Home;