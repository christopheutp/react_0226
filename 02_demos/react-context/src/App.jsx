import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestOneComponent from './components/TestOneComponent'
import TestTwoComponents from './components/TestTwoComponents'

function App() {


  return (
    <>
      <TestOneComponent />
      <TestTwoComponents />
    </>
  )
}

export default App
