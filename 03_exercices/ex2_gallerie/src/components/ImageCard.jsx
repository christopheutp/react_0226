import React from 'react'

export default function ImageCard({item}) {
  return (
    <figure className='card'>
        <img className='card-img' src={item.url} alt={item.title} loading='lazy' />
        <figcaption className='card-caption'>
            <div className='card-title'>
                {item.title}
            </div>
            {item.author ? <div className='card-meta'>Auteur : {item.author}</div> : null}
            <ul className='card-tags'>
                {item.categories.map(c => {
                   return <li className='tag small'>{c}</li>
                })}
            </ul>
        </figcaption>
    </figure>
  )
}
