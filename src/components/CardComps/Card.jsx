import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import Name from './Name'
import Hitpoints from './Hitpoints'
import Photo from './Photo'
import Size from './Size'
import MoveSection from './MoveSection'
import PerformanceBar from './PerformanceBar'
import Description from './Description'
const Card = () => {
  const {
    name,
    type,
    hitpoints,
    img,
    lengthFeet,
    lengthInches,
    weight,
    moveName,
    moveDamage,
    moveDesc,
    weaknessIcon,
    resistanceIcon,
    retreatCost,
    description,
  } = useContext(FormContext)

  const dynamicImg =
    require(`../../img/card-templates/${type}-type.png`).default

  return (
    <CardContainer>
      <p>Basic Pokémon</p>
      <Name name={name} />
      <Hitpoints hitpoints={hitpoints} />
      <Photo img={img} />
      <img src={dynamicImg} />
      <Size
        lengthFeet={lengthFeet}
        lengthInches={lengthInches}
        weight={weight}
      />
      <MoveSection
        moveName={moveName}
        moveDamage={moveDamage}
        moveDesc={moveDesc}
      />
      <PerformanceBar
        weaknessIcon={weaknessIcon}
        resistanceIcon={resistanceIcon}
        retreatCost={retreatCost}
      />
      <Description description={description} />
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  position: relative;
  height: 506px;

  p {
    position: absolute;
    top: 22px;
    left: 36px;
    font-size: 0.62rem;
    font-family: 'Futura LT';
    font-weight: Bold;
  }
`
