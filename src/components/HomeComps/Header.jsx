import styled from 'styled-components'
import pokeheader from '../../img/poke-pet-header.webp'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const Header = () => {
  const { theme, Themes } = useContext(FormContext)

  return (
    <HomeHeader>
      <img className="header" src={pokeheader} alt="pokepet title" />
      <div style={{ backgroundColor: Themes[theme].bgColor }}>
        <h1 style={{ color: Themes[theme].fontColor }}>
          Turn your pet into a Pokémon!
        </h1>
      </div>
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
    margin-top: 30px;
    width: 200px;
  }

  div {
    background-color: #fccf12;
    padding: 7px;
    border-radius: 5px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  h1 {
    font-size: 1.1rem;
    font-family: 'Futura LT';
    font-style: italic;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #d53127;
  }
`
