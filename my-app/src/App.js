import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/home/home';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
