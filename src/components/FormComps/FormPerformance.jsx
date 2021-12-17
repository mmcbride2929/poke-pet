import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormPerformance = () => {
  const { handleDispatch } = useContext(FormContext)

  return (
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
        maxLength="110"
        required
      />

      <label>Level</label>
      <input
        type="number"
        onChange={(e) => handleDispatch('LEVEL', e)}
        max="100"
        min="0"
        required
      />
    </div>
  )
}

export default FormPerformance
