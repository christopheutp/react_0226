import React from 'react'
import ImageCard from './ImageCard'

export default function ImageGrid({items}) {
  return (
    <div className='grid'>
        {items.map(item => {
         return <ImageCard key={item.id} item={item} />
        })}
    </div>
  )
}
