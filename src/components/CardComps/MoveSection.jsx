import styled from 'styled-components'
import EnergyCost from './EnergyCost'
import '../../fonts.css'

const MoveSection = ({ moveName, moveDamage, moveDesc }) => {
  return (
    <MoveContainer>
      <EnergyCost />
      <h2 className="move">{moveName}</h2>
      <h2 className="damage">{moveDamage}</h2>
      <h3 className="desc">{moveDesc}</h3>
    </MoveContainer>
  )
}

export default MoveSection

const MoveContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 70px;
  display: flex;

  .move {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Futura Std';
    font-size: 0.9rem;
  }

  .damage {
    position: absolute;
    top: 20px;
    right: 1px;
    font-family: 'Gill Sans';
    font-weight: 200;
  }

  .desc {
    position: absolute;
    text-align: center;
    top: 55px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 65px;
    overflow-wrap: break-word;
    font-size: 0.7rem;
    font-family: 'Futura LT';
    font-weight: 700;
  }

  @media (max-width: 375px) {
    width: 250px;

    .move {
      top: 45px;
      font-size: 0.8rem;
    }

    .damage {
      top: 55px;
      font-size: 1.2rem;
    }

    .desc {
      top: 90px;
      font-size: 0.65rem;
      font-weight: 600;
      padding: 0 20px;
    }
  }
`
