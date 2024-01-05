import "./App.css";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";



function App() {

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
