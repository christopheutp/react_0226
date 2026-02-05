import React from 'react'

export default function EmptyState({message = "Aucun message"}) {
  return (
    <div className='empty'>
        <span>Vide</span>
        <p>{message}</p>
    </div>
  )
}
