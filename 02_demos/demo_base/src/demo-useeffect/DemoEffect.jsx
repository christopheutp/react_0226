import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function DemoEffect() {

    const [seconds,setSeconds] = useState(0)
    const [loading,setLoading] = useState(true)

    // Au montage du composant declancher un timer qui incremente chaque seconde
    useEffect(() => {
        const id = setInterval(() => setSeconds(s => s + 1),1000)
        setTimeout(() => setLoading(false),3000)
    },[]) // le tableau de dependance est vide , l'effet ne se declenche qu'au montage

    // useEffect avec dependance sur seconds
    useEffect(() => {
        document.title = `Secondes : ${seconds}`
    },[seconds]) // le tableau de dependance contient seconds l'effet se declenche a chaque fois que seconds change



    if(loading){
        return <div>Loading.........</div>
    }

  return (
    <div>
        <h1>Demo Useeffect</h1>
        <p>Le compteur augmente via useeffect</p>
        <p>Secondes : {seconds}s</p>
    </div>
  )
}
