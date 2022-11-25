import logo from './logo.svg';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
