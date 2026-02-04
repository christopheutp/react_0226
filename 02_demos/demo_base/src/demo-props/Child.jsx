import React from 'react'

// export default function Child(props) {
//   return (
//     <>
//     <h3>Enfant</h3>
//     <h4>Titre de l'enfant : {props.titre}</h4>
//     </>
//   )
// }

export default function Child({titre,count,...props}) {
  return (
    <>
    <h3>Enfant </h3>
    <h3>Compteur {count} </h3>
    <h4>Titre de l'enfant : {titre}</h4>
    <button onClick={props.increment}>increment le compteur</button>
    </>
  )
}
