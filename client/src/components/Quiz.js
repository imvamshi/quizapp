import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank";

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");

    const renderButtons = () => {
        // works fine
        const array = Questions[currQuestion].options;
        var number = 1;
        const buttonGroup = array.map((option) => { // here you return the new array created by map
            return <button className='button' onClick={() => setOptionSelected((number++).toString())}>{option}</button>
        });
        console.log(buttonGroup);
        return buttonGroup;
    };

    const nextQuestion = () => {
        console.log(`Option selected = ${optionSelected} \n Correct Answer = ${Questions[currQuestion].answer}`);
        console.log(`optionSelected == Questions[currQuestion].answer -> ${optionSelected == Questions[currQuestion].answer}`);

        if (optionSelected == Questions[currQuestion].answer) {
            setScore(score + 1);
        }
        // alert(score);
        if (currQuestion == 'sizeOfTotalAskableQuestions') {
            // show results button
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (optionSelected == Questions[currQuestion].answer) {
            setScore(score + 1);
        }
        setGameState("endScreen")
    }



    return (
        <div className='Quiz flex'>
            <p>Question  Answers | In (Quiz/) component</p>
            <h2 className='heading'>{Questions[currQuestion].prompt}</h2>
            <div className="options flex">
                {renderButtons()}
            </div>
            {currQuestion == Questions.length  - 1 ? 
            (<button onClick={finishQuiz}>Finish Quiz</button>) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
            
        </div>
    )
}

export default Quiz;