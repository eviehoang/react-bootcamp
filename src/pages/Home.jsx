import Info from "../components/info-card";
import Skills from "../components/skills";
import Accordian from "../components/accordian";

function Home() {
  return (
    <section>
      <div className="flex justify-center m-20 space-x-12">
        <Info />
        <Skills />
      </div>

      <div className="flex justify-center m-20">
        <Accordian />
      </div>
    </section>
  );
}

export default Home;
