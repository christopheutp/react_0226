import React from 'react'
import { useState } from 'react'

export default function FormWithState() {

 const [value,setvalue] = useState("")

 const submitForm = (e) => {
    e.preventDefault();
    console.log("valeur input (formulaire avec state) : "+value)
 }


  return (
    <form onSubmit={submitForm}>
        <input onChange={(e) => setvalue(e.target.value)} value={value} type='text' placeholder='Mon texte'></input>
        <button>Valiter</button>
    </form>
  )
}
