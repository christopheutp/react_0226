import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store'
import ShowCounter from './components/ShowCounter'
import SettingComposant from './components/SettingComposant'

function App() {
  
  const cpt = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <SettingComposant />
      <div>
        <h1>mon Compteur</h1>
        <p>Valeur du compteur : {cpt}</p>
        <button onClick={() => dispatch(increment())}>incrementation</button>
        <button onClick={() => dispatch(decrement())}>decrementation</button>
      </div>
      <ShowCounter />
     
    </>
  )
}

export default App
