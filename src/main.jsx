import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from "react";
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Lost from './pages/Lost.jsx';
import Loading from "./pages/Loading.jsx";
import Landing from './pages/Landing.jsx';


const Root = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: load ? <Loading /> : <Landing /> },
        { path:"/home", index: false, element: load ? <Loading /> : <Home /> },
        { path:"/projects", index: false, element: load ? <Loading /> : <Projects /> },
        { path:"/resume", index: false, element: load ? <Loading /> : <Resume /> },
        { path:"/contact", index: false, element: load ? <Loading /> : <Contact /> },
        { path:"*", index: false, element: load ? <Loading /> : <Lost /> },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
);
