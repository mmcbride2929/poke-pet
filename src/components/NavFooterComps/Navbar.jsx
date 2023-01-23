import styled from 'styled-components'
import pokeball from '../../img/poke-ball.png'
import bulba from '../../img/sprites/bulba.png'
import squirtle from '../../img/sprites/squirtle.png'
import charm from '../../img/sprites/charm.png'
import FormContext from '../../context/FormContext'
import { useContext } from 'react'

const Navbar = () => {
  const { setTheme } = useContext(FormContext)
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <img className="pokeball" src={pokeball} alt="pokeball" />
        </LogoContainer>
        <IconContainer>
          <img src={bulba} onClick={() => setTheme(0)} alt="bulbasaur-sprite" />
          <img
            src={squirtle}
            onClick={() => setTheme(1)}
            alt="squirtle-sprite"
          />
          <img
            src={charm}
            onClick={() => setTheme(2)}
            alt="charmander-sprite"
          />
        </IconContainer>
      </NavContainer>
    </Nav>
  )
}

// input backgrounds
export default Navbar

const Nav = styled.nav`
  max-width: 900px;
  height: auto;
  background-color: #fccf12;
  padding: 10px;
  margin: 0 auto;
  font-size: 0.9rem;
  font-family: 'Futura LT';
  font-weight: bold;
  text-transform: uppercase;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  margin: 0 10px;

  .pokeball {
    vertical-align: middle;
    width: 35px;
    cursor: pointer;
  }
`

const IconContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 0 10px;

  img {
    width: 30px;
    cursor: pointer;
  }
`
