import fire from '../../img/energy-icons/fire.png'
import grass from '../../img/energy-icons/grass.png'
import electric from '../../img/energy-icons/electric.png'
import psychic from '../../img/energy-icons/psychic.png'
import fighting from '../../img/energy-icons/fighting.png'
import normal from '../../img/energy-icons/normal.png'
import water from '../../img/energy-icons/water.png'
import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import UpArrow from './UpArrow'
import DownArrow from './DownArrow'

const FormMove = () => {
  const { handleDispatch } = useContext(FormContext)

  return (
    <>
      <label>Move Name</label>
      <input
        type="text"
        onChange={(e) => handleDispatch('MOVE_NAME', e)}
        maxLength="16"
        required
      />
      <label>Move Damage</label>
      <input
        type="number"
        onChange={(e) => handleDispatch('MOVE_DAMAGE', e)}
        max="999"
        min="0"
        required
      />
      <MoveCostContainer>
        <div className="icon-container">
          <UpArrow type={'fire'} />
          <UpArrow type={'water'} />
          <UpArrow type={'fighting'} />
          <UpArrow type={'normal'} />
          <UpArrow type={'psychic'} />
          <UpArrow type={'electric'} />
          <UpArrow type={'grass'} />
        </div>
        <div className="image">
          <img src={fire} alt="fire-icon" />
          <img src={water} alt="water-icon" />
          <img src={fighting} alt="fighting-icon" />
          <img src={normal} alt="normal-icon" />
          <img src={psychic} alt="psychic-icon" />
          <img src={electric} alt="electric-icon" />
          <img src={grass} alt="grass-icon" />
        </div>
        <div className="icon-container">
          <DownArrow type={'fire'} />
          <DownArrow type={'water'} />
          <DownArrow type={'fighting'} />
          <DownArrow type={'normal'} />
          <DownArrow type={'psychic'} />
          <DownArrow type={'electric'} />
          <DownArrow type={'grass'} />
        </div>
      </MoveCostContainer>
      <label>Move Description</label>
      <input
        type="text"
        onChange={(e) => handleDispatch('MOVE_DESC', e)}
        maxLength="180"
        required
      />
    </>
  )
}

export default FormMove

const MoveCostContainer = styled.div`
  .up {
    vertical-align: text-bottom;
  }

  .down {
    vertical-align: text-top;
  }

  .MuiSvgIcon-root {
    margin: 0 2.1px;
  }

  img {
    margin: 0 5.1px;
    width: 18px;
    height: 18px;
  }

  .icon-container {
  }

  .image {
    display: flex;
    align-items: center;
  }
`
