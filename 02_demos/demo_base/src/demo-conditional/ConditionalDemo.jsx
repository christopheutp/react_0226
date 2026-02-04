import React, { useState } from 'react'

export default function ConditionalDemo() {

    const [isOn,setIsOn] = useState(false)


    if(isOn) {
        return (
            <>
            <h1 className={isOn ? "light" : "dark"}>Le composant est allumé</h1>
            <button onClick={() => setIsOn(false)}>{isOn ? "Eteindre" : "Allumer"}</button>
            </>
        )
    }


  return (
            <>
            <h1 className={isOn ? "light" : "dark"}>Le composant est etteint</h1>
            <button onClick={() => setIsOn(true)}>{isOn ? "Eteindre" : "Allumer"}</button>
            </>
        )
}
