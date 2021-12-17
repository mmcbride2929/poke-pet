import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormSize = () => {
  const { handleDispatch } = useContext(FormContext)
  return (
    <>
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
    </>
  )
}

export default FormSize
