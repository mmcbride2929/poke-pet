import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Examples from './pages/Examples'
import Navbar from './components/NavFooterComps/Navbar'
import { FormProvider } from './context/FormContext'

function App() {
  return (
    <FormProvider>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </Main>
      </Router>
    </FormProvider>
  )
}

export default App

// would be cool to have a charmander, bulba, squirtle
// that you can click and change color layout

//photo
// findout how to always go inside of empty box
// conditionall render so that there isn't an unrednered photo when no photo is uploaded yet

// handleDeleteIcon + handle retreat cost delete
// HANDLE add retreat, and how to add multiple

const Main = styled.main`
  height: auto;
  max-width: 900px;
  background-color: #ee8329;
  margin: 0 auto;
`
