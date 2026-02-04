import React from 'react'
import Puce from './Puce'


const items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'toto'},
    {id: 5, name: 'tata'},
]

export default function ListDemo() {
  return (
    <ul>
        {items.map((item,index) => (
            // <li key={item.id}>{item.name}</li>
            <Puce key={item.id} titre={item.name}></Puce>
        ) )
        }
    </ul>
  )
}
