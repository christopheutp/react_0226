import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductLayout() {
  return (
    <div>
        <h1>Produits</h1>
            <Outlet />
        <footer>
            <p>merci de votre visite !!!</p>
        </footer>
    </div>
  )
}
