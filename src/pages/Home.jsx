import Info from "../components/info-card";
import Skills from "../components/skills";

function Home() {
  return (
    <section>
      <div className="lg:flex items-end justify-center lg:m-32 lg:space-x-12 lg:space-y-2">
        <Info />
        <Skills />
      </div>
    </section>
  );
}

export default Home;