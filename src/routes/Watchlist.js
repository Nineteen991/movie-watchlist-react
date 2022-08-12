import { 
  WatchlistBtn, 
  renderMovieCard, 
  emptyWatchlist 
} from '../styles/MovieCard'

export default function Watchlist({watchlist, setWatchlist}) {

  function removeFromWatchlist(id) {
    const moviesToKeep = watchlist.filter(movie => movie.imdbID !== id)
    setWatchlist(moviesToKeep)
  }

  function removeBtn(movie) {
    return (
      <WatchlistBtn
        style={{color: 'red'}}
        onClick={() => removeFromWatchlist(movie.imdbID)}
      >
        <i>Remove from Watchlist</i>
      </WatchlistBtn>
    )
  }

  const msg = <h3>Your watchlist is looking a little empty...</h3>
  
  return (
    <>
      {
        watchlist.length
          ? watchlist.map(movie => renderMovieCard(movie, removeBtn(movie)))
          : (!watchlist.length && emptyWatchlist(msg))
      }
    </>
  )
}