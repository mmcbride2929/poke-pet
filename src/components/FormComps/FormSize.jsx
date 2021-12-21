import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormSize = () => {
  const { handleDispatch, theme, Themes } = useContext(FormContext)
  return (
    <SizeContainer style={{ backgroundColor: Themes[theme].bgColor }}>
      <h1>Size Details</h1>
      <div>
        <label>Length (ft)</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('LENGTH_FEET', e)}
          max="9"
          min="0"
          required
        />
      </div>
      <div>
        <label>Length (in)</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('LENGTH_INCH', e)}
          max="11"
          min="0"
          required
        />
      </div>
      <div>
        <label>Weight</label>
        <input
          type="number"
          onChange={(e) => handleDispatch('WEIGHT', e)}
          max="999"
          min="0"
          required
        />
      </div>
    </SizeContainer>
  )
}

export default FormSize

const SizeContainer = styled.div`
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
