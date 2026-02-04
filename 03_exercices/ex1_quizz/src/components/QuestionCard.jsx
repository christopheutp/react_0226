import React from 'react'


//  {
//     id: "q1",
//     prompt: "Quel est le résultat de 2 + 2 ?",
//     choices: [
//       { id: "a", label: "3" },
//       { id: "b", label: "4" },
//       { id: "c", label: "5" },
//       { id: "d", label: "22" },
//     ],
//     answerId: "b",
//     explanation: "2 + 2 = 4.",
//   }

export default function QuestionCard({question,onNext}) {
  return (
    <div className='card'>
        <h2 className='card-title'>{question.prompt}</h2>
        <ul className='choices'>
            {question.choices.map(choice => (
                <li key={choice.id} className='choice' onClick={() => onNext(choice.id)}>{choice.label}</li>
            ))}
        </ul>
    </div>
  )
}
