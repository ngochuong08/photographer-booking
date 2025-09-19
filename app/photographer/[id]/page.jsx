import Link from 'next/link'

export default function PhotographerPage({ params }){
  const { id } = params
  return (
    <div>
      <h2>Photographer #{id}</h2>
      <p>Profile and portfolio will appear here.</p>
      <Link href={`/booking/${id}`}>Book this photographer</Link>
    </div>
  )
}
