import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

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
    </PerformanceContainer>
  )
}

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
