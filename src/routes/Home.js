import styled from 'styled-components'

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
  background: url("./images/Icon.png") no-repeat 1rem center;
  background-color: white;
  outline: none;
`

const MovieSearchBtn = styled.button`
  height: 4rem;
  width: 10%;
  border-radius: 0 6px 6px 0;
`

export default function Home() {
  return (
    <>
      <MovieSearchForm>
        <MovieSearchInput />
        <MovieSearchBtn>Search</MovieSearchBtn>
      </MovieSearchForm>
    </>
  )
}