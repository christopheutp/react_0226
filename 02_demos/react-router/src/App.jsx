import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductLayout from './pages/ProductLayout'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function App() {
 

  return (
    <div>
      <nav>
        <NavLink to="/" >Home </NavLink>
        <NavLink to="/products" >Produits </NavLink>
        <NavLink to="/perdu" > 404 </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductLayout/>} >
              <Route index element={<ProductList/>} />
              <Route path=':id' element={<ProductDetail />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default App
