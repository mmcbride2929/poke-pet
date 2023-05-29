import styled from 'styled-components'
import InputForm from '../components/FormComps/InputForm'
import Header from '../components/HomeComps/Header'
import Card from '../components/CardComps/Card'

const Home = () => {
  return (
    <Container>
      <Header />
      <PageContent>
        <Card />
        <InputForm />
      </PageContent>
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 725px) {
    flex-direction: row-reverse;
  }
`
