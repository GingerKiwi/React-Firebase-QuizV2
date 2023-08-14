import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';
import { Route, BrowserRouter as Router} from 'react-router-dom';

// import './App.css'

function App() {

  return (

    <Router> 
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/Game" component={Game} />
        <Route path="/HighScores" component={HighScores} />
      </div>
    </Router>

    
  );
}

export default App
