import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <h1>Quiz App</h1>
            <Link to="/Game" className="btn">
                Start Game
            </Link>
            <Link to="/HighScores" className="btn">
                High Scores
            </Link>
        </div>
    );
}

