import React from 'react'
import { useState } from 'react'
import useCounter from './useCounter'

export default function AppCounter() {

    const {count,increment,decrement,reset} = useCounter()

  return (
    <div>
        <p>Valeur : {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
