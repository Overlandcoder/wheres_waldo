import './App.css';
import Game from './components/Game';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import beachImage from "./images/beach_image.jpg";
import skiImage from "./images/ski_image.jpg";
import spaceImage from "./images/space_image.jpg";
import Leaderboard from "./components/Leaderboard";

function App() {
  const maps = [{ "name": "beach", "image": beachImage },
  { "name": "ski", "image": skiImage },
  { "name": "space", "image": spaceImage }];

  const formattedTime = seconds => {
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home maps={maps} />} />
          {maps.map((map, index) => <Route path={`/${map.name}`} key={index} element={<Game map={map} formattedTime={formattedTime} />} />)}
          <Route path="/leaderboard" element={<Leaderboard maps={maps} formattedTime={formattedTime} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
