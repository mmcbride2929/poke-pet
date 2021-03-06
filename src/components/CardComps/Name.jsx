import styled from 'styled-components'

const Name = ({ name }) => {
  return (
    <NameContainer>
      <h1>{name}</h1>
    </NameContainer>
  )
}

export default Name

const NameContainer = styled.div`
  position: absolute;
  left: 36px;
  top: 31px;
  font-family: 'Futura LT';

  h1 {
    font-size: 1.35rem;
  }

  @media (max-width: 375px) {
    left: 32px;
    top: 26px;

    h1 {
      font-size: 1.1rem;
    }
  }
`
