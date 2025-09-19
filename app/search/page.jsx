import PhotographerCard from '../../src/shared/PhotographerCard'

async function getPhotographers(){
  const res = await fetch('http://localhost:3000/api/photographers')
  if(!res.ok) return []
  return res.json()
}

export default async function SearchPage(){
  const photographers = await getPhotographers()

  return (
    <div>
      <h2>Search Photographers</h2>
      <div className="grid">
        {photographers.map(p=> <PhotographerCard key={p.id} photographer={p} />)}
      </div>
    </div>
  )
}
