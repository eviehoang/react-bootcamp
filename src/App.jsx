import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
    return (
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
    );
  }
  
  export default App;
  