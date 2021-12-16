import styled from 'styled-components'

const Photo = ({ img }) => {
  return (
    <ImageContainer>
      <img src={img} alt="uploaded image" />
    </ImageContainer>
  )
}

export default Photo

const ImageContainer = styled.div`
  position: absolute;
  width: 271px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  img {
    width: 100%;
  }
`
