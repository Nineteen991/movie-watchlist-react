import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import backgroundImg from '../images/movie-posters.png'

const HeaderBg = styled.header`
  grid-column: 1 / -1;
  height: 25vh;
  width: 100%;
  background-color: #0E0E0E;
  position: relative;
`

const HeaderPic = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;

  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`

const HeaderTitleDiv = styled.div`
  grid-column: 2 / 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

export default function Header() {
  const loc = useLocation()
  
  const styles = {
    color: 'white', 
    cursor: 'pointer', 
    fontSize: '1.6rem',
    textDecoration: 'none'
  }

  return (
    <HeaderBg>
      <HeaderPic>
        <HeaderTitleDiv>
          <h1>Find your film</h1>
          {/* Toggle the link from Home to Watchlist */}
          {
            loc.pathname === '/watchlist'
              ? <Link to='/' style={styles}>Home</Link>
              : <Link to='/watchlist' style={styles}>Watchlist</Link>
          }
        </HeaderTitleDiv>
      </HeaderPic>
    </HeaderBg>
  )
}