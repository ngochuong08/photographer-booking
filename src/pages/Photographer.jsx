import React from 'react'

// Photographer component is now prop-driven to avoid react-router-dom.
export default function Photographer({ id }){
  return (
    <div>
      <h2>Photographer #{id ?? '—'}</h2>
      <p>Profile and portfolio will appear here.</p>
      <a href={`/booking/${id}`}>Book this photographer</a>
    </div>
  )
}
