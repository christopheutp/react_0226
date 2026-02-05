import React from 'react'
import { useContext } from 'react'
import { MonContext } from './MonProvider'

export default function TestOneComponent() {

    const {monState,setMonState} = useContext(MonContext)

  return (
    <div>
        <h1>Composant 1</h1>
        <h2>Etat actuel de mon state : {monState ? "Vrai" : "Faux"}</h2>
        <button onClick={() => setMonState(e => !e)}>Changer l'etat</button>
    </div>
  )
}
