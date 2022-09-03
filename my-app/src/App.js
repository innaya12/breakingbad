import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/home/home';
import EpisodePage from './components/episode/episodePage';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/episode" element={<EpisodePage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
