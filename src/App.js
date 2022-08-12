import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import Home from './routes/Home'
import Watchlist from './routes/Watchlist'

// import './App.css'

export default function App() {
  const [renderMovie, setRenderMovie] = useState({})
  const [watchlist, setWatchlist] = useState([])
  
  return (
    <>
      <GlobalStyle />
      <Header />
      
      <Routes>
        <Route path='/' element={
          <Home 
            renderMovie={renderMovie} 
            setRenderMovie={setRenderMovie}
            setWatchlist={setWatchlist}
          />
        } />
        <Route path='/watchlist' element={
          <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
        } />
      </Routes>
    </>
  )
}
