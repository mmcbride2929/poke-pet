import styled from 'styled-components'

const PerformanceBar = ({ weaknessIcon, resistanceIcon, retreatCost }) => {
  return (
    <>
      <WeaknessContainer>
        <p className="weakness">weakness</p>
        {weaknessIcon && (
          <img
            className="weakness-icon"
            src={require(`../../img/energy-icons/${weaknessIcon}.png`).default}
          />
        )}
      </WeaknessContainer>
      <ResistanceContainer>
        <p className="resistance">resistance</p>
        {resistanceIcon && (
          <img
            className="resistance-icon"
            src={
              require(`../../img/energy-icons/${resistanceIcon}.png`).default
            }
          />
        )}
      </ResistanceContainer>
      <RetreatContainer>
        <p className="retreatCost">retreat cost</p>
        <div className="test">
          {retreatCost &&
            retreatCost.map((icon, index) => {
              return (
                <img
                  key={index}
                  className="retreatCost-icon"
                  src={require(`../../img/energy-icons/${icon}.png`).default}
                />
              )
            })}
        </div>
      </RetreatContainer>
    </>
  )
}

export default PerformanceBar

const WeaknessContainer = styled.div`
  .weakness {
    position: absolute;
    top: 410px;
    left: 36px;
    font-size: 0.65rem;
  }

  .weakness-icon {
    position: absolute;
    top: 424px;
    left: 50px;
    height: 18px;
    width: 18px;
  }
`

const ResistanceContainer = styled.div`
  .resistance {
    position: absolute;
    top: 417px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.65rem;
  }
  .resistance-icon {
    position: absolute;
    top: 433px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 18px;
  }
`

const RetreatContainer = styled.div`
  .retreatCost {
    position: absolute;
    top: 410px;
    left: 275px;
    font-size: 0.65rem;
  }

  .test {
    position: absolute;
    width: 55px;
    top: 422px;
    left: 273px;
    text-align: center;
  }

  .retreatCost-icon {
    height: 18px;
    width: 18px;
    vertical-align: middle;
  }
`
