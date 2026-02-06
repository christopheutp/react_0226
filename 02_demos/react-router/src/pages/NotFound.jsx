import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NotFound() {
     const navigate = useNavigate();

  return (
    <div>
        <h1>Aucune page !!!</h1>
        <button onClick={() => navigate("/")}>retour Home</button>
        <NavLink to="/">Home</NavLink>
    </div>
  )
}
