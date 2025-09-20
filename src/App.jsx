import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Photographer from './pages/Photographer'
import Booking from './pages/Booking'
import Auth from './pages/Auth'
import Layout from './components/Layout'

// App is now a simple wrapper for components. This file no longer provides
// route definitions — Next.js app router should be used for routing.
export default function App({ route = '/' , routeParams = {} }){
  // Basic route switch for non-Next SPA usage if needed (very small).
  let Content = <Home />
  if(route === '/search') Content = <Search />
  if(route.startsWith('/photographer')) Content = <Photographer id={routeParams.id} />
  if(route.startsWith('/booking')) Content = <Booking id={routeParams.id} />
  if(route.startsWith('/auth')) Content = <Auth mode={routeParams.mode} />

  return (
    <Layout>
      {Content}
    </Layout>
  )
}
