import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import fire from '../../img/energy-icons/fire.png'
import grass from '../../img/energy-icons/grass.png'
import electric from '../../img/energy-icons/electric.png'
import psychic from '../../img/energy-icons/psychic.png'
import fighting from '../../img/energy-icons/fighting.png'
import normal from '../../img/energy-icons/normal.png'
import water from '../../img/energy-icons/water.png'
import UpArrow from './UpArrow'
import DownArrow from './DownArrow'

const FormPerformance = () => {
  const { handleDispatch, theme, Themes } = useContext(FormContext)

  return (
    <PerformanceContainer style={{ backgroundColor: Themes[theme].bgColor }}>
      <h1>Performance Details</h1>
      <div>
        <label>Weakness</label>
        <select onChange={(e) => handleDispatch('WEAKNESS', e)}>
          <option value=""></option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
        </select>
      </div>
      <div>
        <label>Resistance</label>
        <select onChange={(e) => handleDispatch('RESISTANCE', e)}>
          <option value=""></option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
        </select>
      </div>
      <div>
        <label>About</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('DESCRIPTION', e)}
          maxLength="110"
          required
        />
      </div>
      <div>
        <label>Level</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('LEVEL', e)}
          max="100"
          min="0"
          required
        />
      </div>
      <MoveCostContainer>
        <h1>Retreat Cost</h1>
        <div className="icon-container">
          <UpArrow type={'RETREAT_ADD'} payload={'fire'} />
          <UpArrow type={'RETREAT_ADD'} payload={'water'} />
          <UpArrow type={'RETREAT_ADD'} payload={'fighting'} />
          <UpArrow type={'RETREAT_ADD'} payload={'normal'} />
          <UpArrow type={'RETREAT_ADD'} payload={'psychic'} />
          <UpArrow type={'RETREAT_ADD'} payload={'electric'} />
          <UpArrow type={'RETREAT_ADD'} payload={'grass'} />
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
          <DownArrow type={'RETREAT_DELETE'} payload={'fire'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'water'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'fighting'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'normal'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'psychic'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'electric'} />
          <DownArrow type={'RETREAT_DELETE'} payload={'grass'} />
        </div>
      </MoveCostContainer>
    </PerformanceContainer>
  )
}
// take onclick off of arrow components and add them to the component where the type is passed
// need to make header for both sections
export default FormPerformance

const PerformanceContainer = styled.div`
  width: 340px;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const MoveCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;
  text-align: center;

  h1 {
    margin: 0;
    margin-top: 5px;
  }

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
    justify-content: center;
  }
`
