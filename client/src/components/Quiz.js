import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {
    const { gameState, setGameState } = useContext(QuizContext);
    
    return (
        <div className='flex'>
            Question Page
        </div>
    )
}