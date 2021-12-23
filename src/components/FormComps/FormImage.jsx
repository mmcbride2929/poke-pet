import styled from 'styled-components'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const FormImage = () => {
  const { imageHandler, theme, Themes } = useContext(FormContext)

  return (
    <ImageContainer style={{ backgroundColor: Themes[theme].bgColor }}>
      <h1 style={{ color: Themes[theme].fontColor }}>Add Photo</h1>
      <div>
        <input
          className="image-btn"
          type="file"
          name="img-upload"
          accept="image/*"
          onChange={imageHandler}
        />
      </div>
    </ImageContainer>
  )
}

export default FormImage

const ImageContainer = styled.div`
  width: 340px;
  margin: 0 auto;
  padding: 10px 30px;
  border-radius: 15px;
  background-color: #fccf12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    text-align: center;
  }

  input {
    height: 25px;
    width: 200px;
    margin: 10px;
  }

  input[type='file']::file-selector-button {
    width: 90px;
    height: 25px;
    border: 1px solid black;
    background-color: white;
    color: black;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`
