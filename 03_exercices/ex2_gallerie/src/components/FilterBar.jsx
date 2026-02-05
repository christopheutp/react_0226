import React from 'react'

export default function FilterBar({categories,activeCats,onToggle}) {
  return (
    <div className='filterbar'>
        {categories.map(cat => {
            return (
                <button
                    key={cat}
                    type='button'
                    className={`tag ${activeCats.includes(cat) ? "active" : ""}`}
                    onClick={() => onToggle(cat)}
                >{cat}</button>
            )
        })}
    </div>
  )
}
