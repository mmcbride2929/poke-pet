import styled from 'styled-components'

const Description = ({ description }) => {
  return <DescriptionContainer>{description}</DescriptionContainer>
}

export default Description

const DescriptionContainer = styled.div`
  font-size: 0.75rem;
  font-family: 'Futura LT';
  font-weight: 500;
`
