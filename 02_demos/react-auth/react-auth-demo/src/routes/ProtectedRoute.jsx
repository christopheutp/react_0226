import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../auth'

export default function ProtectedRoute() {

    const location = useLocation();

    // si non connecter renvoie vers la page de login
   if(!isAuthenticated()){
    return <Navigate to="/login" replace state={{ from:location}} />
   }

    // si connecter on affiche la route enfant
  return (
    <Outlet />
  )
}
