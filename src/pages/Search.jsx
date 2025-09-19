import React from 'react'
import PhotographerCard from '../shared/PhotographerCard'

export default function Search(){
  // placeholder data
  const photographers = [
    {id:1, name:'Anna Nguyen', location:'Hanoi', price:200, rating:4.8},
    {id:2, name:'Minh Tran', location:'Ho Chi Minh', price:150, rating:4.6}
  ]

  return (
    <div>
      <h2>Search Photographers</h2>
      <div className="grid">
        {photographers.map(p=> <PhotographerCard key={p.id} photographer={p} />)}
      </div>
    </div>
  )
}
