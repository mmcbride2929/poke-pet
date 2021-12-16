import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pokeball from '../../img/poke-ball.png'

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img className="pokeball" src={pokeball} alt="pokeball" />
      </LogoContainer>
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/examples">Examples</Link>
      </LinksContainer>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.nav`
  display: flex;
`

const LogoContainer = styled.div`
  // pokeball
  .pokeball {
    width: 35px;
  }
`

const LinksContainer = styled.div``
