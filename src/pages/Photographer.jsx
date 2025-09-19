import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Photographer(){
  const { id } = useParams()

  return (
    <div>
      <h2>Photographer #{id}</h2>
      <p>Profile and portfolio will appear here.</p>
      <Link to={`/booking/${id}`}>Book this photographer</Link>
    </div>
  )
}
