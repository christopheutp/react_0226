import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const DATA = [
    {id:1, name:"vinyle", prix:30},
    {id:2, name:"cassette", prix:55},
    {id:3, name:"VHS", prix:67},
]

export default function ProductDetail() {

 const { id } = useParams();
 const item = DATA.find(p => p.id === Number(id));
 const navigate = useNavigate();


 if(!item) {
    return (
        <div>
            <h2>produit introuvable</h2>
        </div>
    )
 }

 const clickButton = () => {
    console.log("clique sur le bouton !!!")
    navigate("/products")
 }

  return (
    <div>
        <h2>detail Produit</h2>
        <p>id : {item.id}</p>
        <p>nom : {item.name}</p>
        <p>prix : {item.prix}</p>
        <button onClick={clickButton}>retour a la liste des produits</button>
        <button onClick={() => navigate("/products")}>retour a la liste des produits</button>
    </div>
  )
}
