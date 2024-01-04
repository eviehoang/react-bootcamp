import Info from "../components/info-card";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <section className="px-20 py-5 flex justify-center gap-x-60">
      <div className="cols-7 m-5"><Info /></div>
      <div className="cols-span m-5"><Sidebar /></div>
    </section>
  );
}

export default Home;
