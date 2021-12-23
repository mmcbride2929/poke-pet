import styled from 'styled-components'

const Image = ({ img }) => {
  return (
    <ImageContainer>
      {img && <img src={img} alt="uploaded image" />}
    </ImageContainer>
  )
}

export default Image

const ImageContainer = styled.div`
  position: absolute;
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  img {
    width: 100%;
    height: 195px;
    margin-top: 63px;
    border-radius: 2px;
  }

  @media (max-width: 375px) {
    width: 227px;

    img {
      margin-top: 52px;
      height: 162px;
    }
  }
`
