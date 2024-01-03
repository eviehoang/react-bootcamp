import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Wrap the entire app with the Router component */}
      <main className="min-h-screen flex flex-col justify-between">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add your other routes as needed */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
