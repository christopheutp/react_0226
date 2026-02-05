import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowCounter() {

const compteur = useSelector(state => state.counter.value)

  return (
    <h1>Mon composant qui affiche mon compteur {compteur}</h1>
  )
}
