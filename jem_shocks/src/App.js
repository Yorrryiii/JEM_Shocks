import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
    </Router>
    // <Router>
    //   <div>
    //     <Navbar/>

    //     <Routes>
    //       <Route path="*" element={<Error />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
