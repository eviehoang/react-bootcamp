import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';

// Radial Gradient Cursor Trailer
const gradient = document.querySelector(".gradient");

function onMouseMove(event) {
  gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 70%)';
}
document.addEventListener("mousemove", onMouseMove);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
