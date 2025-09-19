export async function GET(){
  const sample = [
    {id:1, name:'Anna Nguyen', location:'Hanoi', price:200, rating:4.8},
    {id:2, name:'Minh Tran', location:'Ho Chi Minh', price:150, rating:4.6}
  ]
  return new Response(JSON.stringify(sample), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
