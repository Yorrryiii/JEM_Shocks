import logo from './logo.svg';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Navbar />
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
