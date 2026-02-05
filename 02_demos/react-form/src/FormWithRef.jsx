import React from 'react'
import { useRef } from 'react'

export default function FormWithRef() {

    const inputRef = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Valeur de mon Input (avec useref) : "+inputRef.current.value)
    }

  return (
     <form onSubmit={submitForm}>
        <input ref={inputRef} type='text' placeholder='Mon texte'></input>
        <button>Valiter</button>
    </form>
  )
}
