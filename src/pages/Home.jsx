import Info from "../components/info-card";
import Skills from "../components/skills";

function Home() {
  return (
    <section>
      <div className="flex items-end justify-center m-36 space-x-12">
        <Info />
        <Skills />
      </div>
    </section>
  );
}

export default Home;