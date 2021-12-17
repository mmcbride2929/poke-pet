import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const EnergyCost = () => {
  const { energyIcons } = useContext(FormContext)

  return (
    <EnergyContainer>
      <div>
        {energyIcons.length > 0 &&
          energyIcons.map((icon) => {
            return (
              <img
                src={require(`../../img/energy-icons/${icon}.png`).default}
              />
            )
          })}
      </div>
    </EnergyContainer>
  )
}

export default EnergyCost

const EnergyContainer = styled.div`
  position: absolute;
  top: 20px;
  height: 38px;
  width: 36px;

  img {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }
`
