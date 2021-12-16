import styled from 'styled-components'

const Size = ({ lengthFeet, lengthInches, weight }) => {
  const space = '\xa0'
  return (
    <SizeContainer>
      <h5 className="poke">Pet Pokémon.</h5>
      <h5 className="length">Length:</h5>
      <h5 className="userLengthFeet">{lengthFeet}</h5>
      <h5 className="feetApostrophe">'</h5>
      <h5 className="userLengthInches">{lengthInches}",</h5>
      <h5 className="weight">Weight:</h5>
      <h5 className="userWeight">
        {weight}
        {space}lbs.
      </h5>
    </SizeContainer>
  )
}

export default Size

const SizeContainer = styled.div`
  display: flex;
  font-family: 'Futura LT';
  font-style: italic;
  font-weight: 200;
  font-size: 0.85rem;
  letter-spacing: 0.5px;

  .poke {
    position: absolute;
    top: 269.5px;
    left: 58px;
  }

  .length {
    position: absolute;
    top: 269.5px;
    left: 135px;
  }

  .userLengthFeet {
    position: absolute;
    top: 269.5px;
    left: 177px;
  }

  .feetApostrophe {
    position: absolute;
    top: 269.5px;
    left: 184px;
  }

  .userLengthInches {
    position: absolute;
    top: 269.5px;
    left: 188px;
  }

  .weight {
    position: absolute;
    top: 269.5px;
    left: 216px;
  }

  .userWeight {
    position: absolute;
    top: 269.5px;
    left: 258px;
  }
`
