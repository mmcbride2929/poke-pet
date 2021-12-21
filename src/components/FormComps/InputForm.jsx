import styled from 'styled-components'
import FormTop from './FormTop'
import FormImage from './FormImage'
import FormSize from './FormSize'
import FormMove from './FormMove'
import FormPerformance from './FormPerformance'
import FormContext from '../../context/FormContext'
import { useContext } from 'react'

const InputForm = () => {
  const { Themes, theme } = useContext(FormContext)

  return (
    <FormContainer>
      <Form style={{ color: Themes[theme].fontColor }}>
        <FormTop />
        <FormImage />
        <FormSize />
        <FormMove />
        <FormPerformance />
      </Form>
    </FormContainer>
  )
}

export default InputForm

const FormContainer = styled.div`
  margin: 20px auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 20px 0;
  font-size: 1rem;
  font-family: 'Futura LT';
  font-weight: bold;
  letter-spacing: 0.75px;

  input,
  select {
    outline: none;
    width: 180px;
    margin: 5px 0;
    border: none;
    background-color: white;
    height: 25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  input[type='text'],
  input[type='number'] {
    padding: 5px;
  }

  .down,
  .up {
    color: black;
  }
`
