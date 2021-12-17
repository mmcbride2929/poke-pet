import styled from 'styled-components'
import FormTop from './FormTop'
import FormImage from './FormImage'
import FormSize from './FormSize'
import FormMove from './FormMove'
import FormPerformance from './FormPerformance'

const InputForm = () => {
  return (
    <FormContainer>
      <Form>
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
  height: 600px;
`

const Form = styled.form`
  font-family: 'Futura LT';
  font-weight: bold;
  color: #d53127;
  /* height: 506px;
  width: 360px;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 15px;
  background-color: #fccf12;
  display: flex;
  flex-direction: column;
  align-items: center; */

  input,
  select {
    width: 250px;
    margin: 5px 0;
    border: none;
    background-color: white;
    height: 22px;
  }

  .down,
  .up {
    color: black;
  }
`
