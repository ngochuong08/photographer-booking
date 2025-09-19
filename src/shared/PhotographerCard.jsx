"use client"
import React from 'react'
import Link from 'next/link'

export default function PhotographerCard({photographer}){
  return (
    <article className="photographer-card">
      <div className="thumb" style={{background:'#ddd',height:140}} />
      <h3>{photographer.name}</h3>
      <div>{photographer.location} • ${photographer.price}</div>
      <div>Rating: {photographer.rating}</div>
      <Link href={`/photographer/${photographer.id}`}>View profile</Link>
    </article>
  )
}
