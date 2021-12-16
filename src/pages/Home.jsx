import styled from 'styled-components'
import InputForm from '../components/FormComps/InputForm'
import Header from '../components/HomeComps/Header'
import Card from '../components/CardComps/Card'

const Home = () => {
  return (
    <>
      <Header />
      <PageContent>
        <InputForm />
        <Card />
      </PageContent>
    </>
  )
}

export default Home

const PageContent = styled.div`
  display: flex;
`
//add upload photo so it shows up on screen
