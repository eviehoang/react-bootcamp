import "./App.css";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Check if the current route is the landing page
    const isLandingPage = location.pathname === '/'; // Adjust the route accordingly

    // Update the state to show/hide the navbar
    setShowNavbar(!isLandingPage);
  }, [location]);

  return (
    <main className="min-h-screen flex flex-col">
      {showNavbar && <Nav />}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
