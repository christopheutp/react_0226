import React from 'react'

export default function ResultView({score,total,onRestart}) {
  return (
    <div className='card'>
        <h2 className='card-title'>Résultas</h2>
        <p className='score'> Score : {score}/{total}</p>
        <div className='actions'>
            <button className='btn' onClick={onRestart}>Rejouer</button>
        </div>
    </div>
  )
}
