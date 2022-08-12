import styled from 'styled-components'

import star from '../images/star.png'
import filmIcon from '../images/Icon-film.png'

export const MovieCard = styled.div`
  grid-column: 2 / 3;
  margin-top: 3%;
  height: 25vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`

export const MovieInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const StarIcon = styled.img`
  width: 4.5rem;
  margin: 0 2rem 0 3rem;
`

export const MovieDataDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`

export const MovieData = styled.h4`
  display: inline;
  margin-right: 2rem;
`

export const WatchlistBtn = styled.p`
  color: black;
  cursor: pointer;
`

export const MovieDesc = styled.p`
  color: #6B7280;
  margin-top: 1rem;
  font-size: 1.6rem;
`

export const posterStyles = {
  height: "90%",
  marginRight: "2rem"
}

export const EmptyWatchlistDiv = styled.div`
  grid-column: 2 / 3;
  margin: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Film = styled.img`
  margin-top: 2rem;
  height: 10rem;
  width: 10rem;
  z-index: 100;
`

// the movie card that will be used both at '/' & '/watchlist'
export function renderMovieCard(movie, elem) {
  return (
    <MovieCard key={movie.imdbID}>
      <img 
        src={movie.Poster}
        style={posterStyles} 
        alt={movie.Title}
      />
      <MovieInfoDiv>
        <h1>
          {movie.Title} 
          <StarIcon src={star} alt='star' />
          {movie.imdbRating}
        </h1>
        <MovieDataDiv>
          <MovieData>{movie.Runtime}</MovieData>
          <MovieData>{movie.Genre}</MovieData>
          {/* btn is dependent on the webpage */}
          {elem}
        </MovieDataDiv>
        <MovieDesc>{movie.Plot}</MovieDesc>
      </MovieInfoDiv>
    </MovieCard>
  )
}

// the film icon that will display if there are no movies
export function emptyWatchlist(msg) {
  return (
    <EmptyWatchlistDiv>
      <Film src = {filmIcon} />
      {msg}
    </EmptyWatchlistDiv>
  )
} 