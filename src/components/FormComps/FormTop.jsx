import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormTop = () => {
  const { handleDispatch } = useContext(FormContext)

  return (
    <InputContainer>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('NAME', e)}
          maxLength="16"
          required
        />
      </div>
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
    </InputContainer>
  )
}

export default FormTop

const InputContainer = styled.div`
  width: 360px;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 15px;
  background-color: #fccf12;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-left: 35px;
    }

    input {
      margin: 0 auto;
    }
  }
`
