import React, { Component } from 'react';
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
        }
    }

async componentDidMount() {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
        
    try {
        const questions = await loadQuestions();
        console.log(questions);

        this.setState({
            currentQuestion: questions[0],
        });
    }
    catch(err) {
        console.error(err);
    }
}
    render() { 
        return (
            <div className="container">
                {this.state.currentQuestion && (
                <Question question={this.state.currentQuestion} />
                )}
            </div>
        );
    }
}