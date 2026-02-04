import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { QUESTIONS } from '../data/quiz'
import ResultView from '../components/ResultView'

export default function QuizPage() {

    const [index,setIndex] = useState(0)
    const [score,setScore] = useState(0)
    const total = QUESTIONS.length;
    const finished = index >= total;

    const next = (id) => {
        console.log("Réponse selectionnée : "+id)
        // mettre a jour le score si la reponse est correcte
        setScore(s => s + (id === QUESTIONS[index].answerId ? 1 : 0))
        // Passe a la question suivante
        setIndex(i => i + 1)
    }

    const restart = () => {
        setIndex(0);
        setScore(0);
    }


    const currentQuestion = QUESTIONS[index]

    if(finished) {
        return(
            <div className='page'>
                <ResultView score={score} total={total} onRestart={restart}/>
            </div>
        )
    }

  return (
    <div className='page'>
        <QuestionCard question={currentQuestion} onNext={next} />
    </div>
  )
}
