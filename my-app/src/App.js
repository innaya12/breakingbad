import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/home/home';
import EpisodePage from './components/episode/episodePage';
import CharacterPage from './components/character/characterPage';
import './App.css';

/// App allows to navigate to three different pages by path
function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/episode" element={<EpisodePage />} />
        <Route exact path="/character" element={<CharacterPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
