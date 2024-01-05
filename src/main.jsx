import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Lost from './pages/Lost.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
        { path:"/home", index: false, element: <Home /> },
        { path:"/projects", index: false, element: <Projects /> },
        { path:"/resume", index: false, element: <Resume /> },
        { path:"/contact", index: false, element: <Contact /> },
        { path:"*", index: false, element: <Lost /> },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
