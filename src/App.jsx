import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Photographer from './pages/Photographer'
import Booking from './pages/Booking'
import Auth from './pages/Auth'
import Layout from './components/Layout'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/photographer/:id" element={<Photographer />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/auth/:mode" element={<Auth />} />
      </Routes>
    </Layout>
  )
}
