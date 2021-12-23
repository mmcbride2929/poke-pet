import styled from 'styled-components'

const Hitpoints = ({ hitpoints }) => {
  return <HitpointsContainer>{hitpoints} HP</HitpointsContainer>
}

export default Hitpoints

const HitpointsContainer = styled.div`
  font-size: 1.35rem;
  font-family: 'Futura LT';
  font-weight: bold;
  color: #d53127;
  position: absolute;
  top: 31px;
  right: 66px;

  @media (max-width: 375px) {
    font-size: 1.1rem;
    top: 26px;
    right: 56px;
  }
`
