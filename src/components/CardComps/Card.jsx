import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import CardContext from '../../context/CardContext'
import Name from './Name'
import Hitpoints from './Hitpoints'
import Image from './Image'
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
    level,
    theme,
    Themes,
  } = useContext(FormContext)

  const { getImage, ref, downloadScreenshot } = useContext(CardContext)

  const dynamicImg =
    require(`../../img/card-templates/${type}-type.png`).default

  return (
    <CardSection>
      <CardContainer ref={ref}>
        <p>Basic Pokémon</p>
        <Name name={name} />
        <Hitpoints hitpoints={hitpoints} />
        {/* user uploaded photo */}
        <Image img={img} />

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
        <Description description={description} level={level} />
      </CardContainer>
      <ButtonContainer>
        <StyledButton
          style={{
            color: Themes[theme].fontColor,
            backgroundColor: Themes[theme].bgColor,
          }}
          onClick={downloadScreenshot}
        >
          Download
        </StyledButton>
      </ButtonContainer>
    </CardSection>
  )
}

export default Card

const CardContainer = styled.div`
  position: relative;
  height: 506px;
  width: 360px;
  margin-top: 35px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  p {
    position: absolute;
    top: 22px;
    left: 36px;
    font-size: 0.62rem;
    font-family: 'Futura LT';
    font-weight: Bold;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  height: 40px;
  width: 100px;
  margin: 25px 10px;

  border: none;
  border-radius: 5px;
  font-family: 'Futura LT';
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.9px;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
const CardSection = styled.div`
  margin: 0 auto;
`
