import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Copyright from './components/Copyright';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/JEM_SHOCKS/" element={<Home />} />
            <Route exact path="/JEM_SHOCKS/shop" element={<Shop />} />
            <Route exact path="/JEM_SHOCKS/about" element={<About />} />
            <Route exact path="/JEM_SHOCKS/contact" element={<Contact />} />

            <Route exact path="/JEM_SHOCKS/login" element={<Login />} />

            <Route path="/JEM_SHOCKS/*" element={<Error />} />
          </Routes>

          <Footer />
          <Copyright/>
      </div>
    </Router>
  );
}

export default App;
