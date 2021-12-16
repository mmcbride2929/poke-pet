import { useContext } from 'react'
import styled from 'styled-components'
import FormContext from '../../context/FormContext'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import fire from '../../img/energy-icons/fire.png'
import grass from '../../img/energy-icons/grass.png'
import electric from '../../img/energy-icons/electric.png'
import psychic from '../../img/energy-icons/psychic.png'
import fighting from '../../img/energy-icons/fighting.png'
import normal from '../../img/energy-icons/normal.png'
import water from '../../img/energy-icons/water.png'

const InputForm = () => {
  const { dispatch, img } = useContext(FormContext)
  // display and switch cards based on type class

  const handleDispatch = (string, e) => {
    console.log('SET_' + string)
    console.log(e.target.value)
    dispatch({
      type: 'SET_' + string,
      payload: e.target.value,
    })
  }

  const imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch({ type: 'SET_IMG', payload: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleEnergy = (string, energyType) => {
    console.log('SET_' + string)
    console.log(energyType)
    dispatch({
      type: 'SET_' + string,
      payload: energyType,
    })
  }

  return (
    <FormContainer>
      <Form>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('NAME', e)}
          maxLength="16"
          required
        />
        <label>Type</label>
        <select onChange={(e) => handleDispatch('TYPE', e)}>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
        </select>
        <label>Hitpoints</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('HP', e)}
          max="120"
          min="30"
          required
        />
        <div>
          <h1>add photo:</h1>
          <input
            type="file"
            name="img-upload"
            accept="image/*"
            onChange={imageHandler}
          />
        </div>
        <label>Length (ft)</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('LENGTH_FEET', e)}
          max="9"
          min="0"
          required
        />
        <label>Length (in)</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('LENGTH_INCH', e)}
          max="11"
          min="0"
          required
        />
        <label>Weight</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('WEIGHT', e)}
          max="999"
          min="0"
          required
        />
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
          <div>
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'fire')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'water')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'fighting')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'normal')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'psychic')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'electric')}
            />
            <ArrowDropUpIcon
              className="up"
              onClick={() => handleEnergy('ENERGY', 'grass')}
            />
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
          <div>
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'fire')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'water')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'fighting')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'normal')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'psychic')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'electric')}
            />
            <ArrowDropDownIcon
              className="down"
              onClick={() => handleEnergy('ENERGY_DELETE', 'grass')}
            />
          </div>
        </MoveCostContainer>
        <label>Move Description</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('MOVE_DESC', e)}
          maxLength="180"
          required
        />
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

        <label>Pet Description</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('DESCRIPTION', e)}
          maxLength="80"
          required
        />
      </Form>
    </FormContainer>
  )
}

export default InputForm

const FormContainer = styled.div`
  height: 600px;
`

const Form = styled.form`
  height: 500px;
  width: 300px;
  margin: 0 auto;
  background-color: grey;
`

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

  .image {
    display: flex;
    align-items: center;
  }

  img {
    margin: 0 5px;
    width: 18px;
    height: 18px;
  }
`
