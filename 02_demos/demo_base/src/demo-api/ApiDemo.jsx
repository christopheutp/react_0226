import React from 'react'
import { useEffect } from 'react'
import { fetchPost } from './api'
import { useState } from 'react'

export default function ApiDemo() {

    const [post,setPost] = useState(null);
    const [error,setError] = useState("")

    useEffect(() => {
        fetchPost(899)
            .then(data => {setPost(data)})
            .catch(e => setError(e.message))
    },[])


    if(error) return <p>Erreur : {error}</p>
    if(!post) return <p>Chargement...</p>

  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}
