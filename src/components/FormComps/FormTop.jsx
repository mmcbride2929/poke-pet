import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormTop = () => {
  const { handleDispatch, theme, Themes } = useContext(FormContext)

  return (
    <InputContainer style={{ backgroundColor: Themes[theme].bgColor }}>
      <h1>Pet Details</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => handleDispatch('NAME', e)}
          maxLength="16"
          required
        />
      </div>
      <div>
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
      </div>
      <div>
        <label>HP</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('HP', e)}
          max="120"
          min="30"
          required
        />
      </div>
    </InputContainer>
  )
}

export default FormTop

const InputContainer = styled.div`
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

  @media (max-width: 375px) {
    width: 300px;
  }
`
