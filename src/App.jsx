import { useState } from 'react'

import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {

  return (
    <Router> {/* I've also tried without wrapping things in Routes */}
      <Routes> 
        {/* <div className="container"> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Game" element={<Game/>} />
          <Route path="/HighScores" element={<HighScores />} />
        {/* </div> */}
      </Routes>
    </Router> 
    
  );
}

export default App
