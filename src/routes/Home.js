import { useState, useEffect } from 'react'
import styled from 'styled-components'

import searchIcon from '../images/Icon.png'
import filmIcon from '../images/Icon-film.png'

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
`

const MovieSearchBtn = styled.button`
  height: 4rem;
  width: 10%;
  border-radius: 0 6px 6px 0;
`

const EmptyMovieDiv = styled.div`
  grid-column: 2 / 3;
  background: url("${filmIcon}") no-repeat center;
  /* height: 73vh; */
  list-style: none;
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const MovieCard = styled.div`
  grid-column: 2 / 3;
  height: 25vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`

export default function Home({renderMovie, setRenderMovie}) {
  const [inputValue, setInputValue] = useState('')
  const [movie, setMovie] = useState('')

  function getMovie(e) {
    e.preventDefault()
    setMovie(e.target.children[0].value)
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=b1eb06c0&t=${movie}`)
      .then(res => res.json())
      .then(data => setRenderMovie(data))
  }, [movie])
console.log(renderMovie)
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
          ? <MovieCard></MovieCard>
          : <EmptyMovieDiv><h4>Start exploring</h4></EmptyMovieDiv>
      }
    </>
  )
}