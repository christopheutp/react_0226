import React from 'react'
import useCounter from './useCounter'

export default function MyCounter() {


 const {count,increment,decrement} = useCounter(42)

  return (
     <div>
        <p>Valeur : {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}
