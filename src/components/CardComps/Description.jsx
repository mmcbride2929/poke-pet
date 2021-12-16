import styled from 'styled-components'

const Description = ({ description, level }) => {
  return (
    <DescriptionContainer>
      {description}
      <p className="level">LV. {level}</p>
    </DescriptionContainer>
  )
}

export default Description

const DescriptionContainer = styled.div`
  width: 292px;
  height: 28px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 18px;
  padding: 0 8px;
  font-size: 0.6rem;
  font-family: 'Futura LT';
  font-weight: 600;
  font-style: italic;
  overflow-wrap: break-word;
  text-align: left;

  .level {
    width: 33px;
    text-align: right;
    top: 12px;
    left: 251px;
  }
`
