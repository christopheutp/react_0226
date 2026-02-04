import React, { useState } from 'react'
import Child from './Child'

export default function PropsDemo() {

    // l'etat vit dans le parent c'est la source de verite
    // nos premiers states
    const [count,setCount] = useState(1)
    const [titre, setTitre] = useState("Mon titre 1")
    const [titre2, setTitre2] = useState("Mon titre 2")

    const increment = () => {
        setCount(c => c + 1)
    }

    const incrementWithArg = (arg) => {
        setCount(c => c + arg)
    }

    const message = () => {
        console.log("Bonjour")
    }

  return (
    <>
    <h1>Parent</h1>
        <Child titre={titre} count={count} increment={increment}/>
        <Child titre={titre2} count={count} increment={message}/>
        <button onClick={() => setCount(c => c + 1)}>+1</button>
        <button onClick={increment}>+1</button>
        <button onClick={() => incrementWithArg(5)}>+5</button>
    </>
  )
}
