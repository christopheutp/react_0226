import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MonPremierComposant from './MonPremierComposant'
import InlineCard from './demo-css/InlineCard'

function App() {
 

  return (
    <>
    <h1>Ma premiere Applciation React !!!</h1>
    <h2>Voici mon premier composant </h2>
    <div> Du texte dans ma div </div>
    <MonPremierComposant/>
    <MonPremierComposant/>
    <MonPremierComposant/>
    <MonPremierComposant/>
    <InlineCard />
    </>

  )
}

export default App
