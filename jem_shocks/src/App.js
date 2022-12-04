import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />

            <Route path="*" element={<Error />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
