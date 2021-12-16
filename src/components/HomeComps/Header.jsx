import styled from 'styled-components'
import pokeheader from '../../img/poke-pet-header.png'

const Header = () => {
  return (
    <HomeHeader>
      <img className="header" src={pokeheader} alt="pokepet title" />
      <h1>Turn your pet into a Pokémon!</h1>
    </HomeHeader>
  )
}

export default Header

const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1rem;

  .header {
    width: 200px;
  }

  h1 {
    font-size: 1.1rem;
  }
`
