import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormImage = () => {
  const { imageHandler } = useContext(FormContext)

  return (
    <div>
      <h1>add photo:</h1>
      <input
        type="file"
        name="img-upload"
        accept="image/*"
        onChange={imageHandler}
      />
    </div>
  )
}

export default FormImage
