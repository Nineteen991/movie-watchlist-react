import { useState, useEffect } from 'react'
import styled from 'styled-components'

import searchIcon from '../images/Icon.png'
import { 
  WatchlistBtn, 
  renderMovieCard, 
  emptyWatchlist 
} from '../styles/MovieCard'

const MovieSearchForm = styled.form`
  grid-column: 2 / 3;
  margin: -5% 0;
  z-index: 100;
  
  display: flex;
  align-items: center;
`

const MovieSearchInput = styled.input`
  height: 4rem;
  width: 90%;
  padding: 1rem 3.3rem;
  border-radius: 6px 0 0 6px;
  background: url("${searchIcon}") no-repeat 1rem center;
  background-color: white;
  outline: none;
  @media screen and (max-width: 50rem) {
    width: 80%;
  }
`

const MovieSearchBtn = styled.button`
  height: 4rem;
  width: 10%;
  border-radius: 0 6px 6px 0;
  @media screen and (max-width: 50rem) {
    width: 20%;
  }
`

export default function Home({renderMovie, setRenderMovie, setWatchlist}) {

  const [inputValue, setInputValue] = useState('')
  const [movie, setMovie] = useState('')

  function getMovie(e) {
    e.preventDefault()
    setMovie(inputValue)
    setInputValue(e.target.reset())
  }

  function addToWatchlist() {
    setWatchlist(prev => (
      [
        ...prev,
        renderMovie
      ]
    ))
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=b1eb06c0&t=${movie}`)
      .then(res => res.json())
      .then(data => setRenderMovie(data))
  }, [movie])

  const addBtn = (
    <WatchlistBtn onClick={() => addToWatchlist()}>
      <i>Add to Watchlist</i>
    </WatchlistBtn>
  )

 const msg = <h3>Start exploring</h3>

  return (
    <>
      <MovieSearchForm onSubmit={(e) => getMovie(e)}>
        <MovieSearchInput 
          placeholder='Search for a movie'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <MovieSearchBtn>Search</MovieSearchBtn>
      </MovieSearchForm>
      {
        movie 
          ? renderMovieCard(renderMovie, addBtn)
          : emptyWatchlist(msg)
      }
    </>
  )
}