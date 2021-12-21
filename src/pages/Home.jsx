import styled from 'styled-components'
import InputForm from '../components/FormComps/InputForm'
import Header from '../components/HomeComps/Header'
import Card from '../components/CardComps/Card'

const Home = () => {
  return (
    <>
      <Header />
      <PageContent>
        <Card />
        <InputForm />
      </PageContent>
    </>
  )
}

export default Home

const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 725px) {
    flex-direction: row-reverse;
  }
`
