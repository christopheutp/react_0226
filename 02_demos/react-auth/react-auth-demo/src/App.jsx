import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './routes/ProtectedRoute'
import SecurePage from './pages/SecurePage'
import { Link, Route, Routes } from "react-router-dom"


function Home(){
  return(
    <div>
      <h1>Demo Auth</h1>
      <ul>
        <li><Link to="/login">Aller au login</Link></li>
        <li><Link to="/secure">Aller a la page prive</Link></li>
      </ul>
    </div>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<LoginPage/>} />
      <Route element={<ProtectedRoute/>} >
        <Route path="secure" element={<SecurePage/>} />
      </Route>
      <Route path="*" element={<Home/>} />
    </Routes>
  )
}

export default App
