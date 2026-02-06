import React from 'react'
import { NavLink } from 'react-router-dom'


const DATA = [
    {id:1, name:"vinyle", prix:30},
    {id:2, name:"cassette", prix:55},
    {id:3, name:"VHS", prix:67},
]

export default function ProductList() {
  return (
    <ul>
        {DATA.map(p => (
            <li key={p.id}><NavLink to={`/products/${p.id}`}>{p.name}</NavLink></li>
        ))}
    </ul>
  )
}
