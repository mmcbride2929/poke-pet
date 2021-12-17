import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pokeball from '../../img/poke-ball.png'

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <StyledLink to="/">
            <img className="pokeball" src={pokeball} alt="pokeball" />
          </StyledLink>
        </LogoContainer>
        <LinksContainer>
          <div>
            <StyledLink to="/">Home</StyledLink>
          </div>
          <div>
            <StyledLink to="/examples">Examples</StyledLink>
          </div>
        </LinksContainer>
      </NavContainer>
    </Nav>
  )
}

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
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 175px;
  margin: 0 15px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 75px;
    height: 30px;
    border-radius: 2px;
    background-color: #d53127;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  padding: 5px 0;
  color: #fccf12;
  text-decoration: none;
`
