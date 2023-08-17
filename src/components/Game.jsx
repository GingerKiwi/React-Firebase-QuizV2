import React, { Component } from 'react';
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true
        }
    }

async componentDidMount() {    
    try {
        const questions = await loadQuestions();
        this.setState({ currentQuestion: questions[0], loading: false,});
    } catch(err) {
        console.error(err);
    }
}

    render() { 
        return (
            <div className="container">
                {this.state.loading && <div id="loader" />}
                {!this.state.loading && this.state.currentQuestion && (
                <Question question={this.state.currentQuestion} />
                )}
            </div>
        );
    }
}