import styled from 'styled-components'

import backgroundImg from '../images/movie-posters.png'

const HeaderDiv = styled.header`
  grid-column: 1 / -1;
  height: 25vh;
  width: 100%;
  background-color: #0E0E0E;
  position: relative;
`

const HeaderImg = styled.image`
  content: '';
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

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderImg />
    </HeaderDiv>
  )
}