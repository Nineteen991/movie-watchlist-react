import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './routes/Home'
import Watchlist from './routes/Watchlist'
import './App.css'

export default function App() {
  const [renderMovie, setRenderMovie] = useState({})
  
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={
          <Home renderMovie={renderMovie} setRenderMovie={setRenderMovie}/>
        } />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </>
  )
}
