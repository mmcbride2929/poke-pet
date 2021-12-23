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
  padding: 0 3px;
  font-size: 0.6rem;
  font-family: 'Futura LT';
  font-weight: 600;
  font-style: italic;
  overflow-wrap: break-word;
  text-align: center;

  .level {
    width: 33px;
    text-align: right;
    top: 12px;
    left: 251px;
  }

  @media (max-width: 375px) {
    width: 240px;
    height: 21.5px;
    font-size: 0.5rem;

    .level {
      width: 35px;
      text-align: right;
      top: 10px;
      left: 200px;
      font-size: 0.5rem;
    }
  }
`
