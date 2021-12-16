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

// clean up the form and make it into more readable bite size code

//photo
// findout how to always go inside of empty box
// conditionall render so that there isn't an unrednered photo when no photo is uploaded yet

// handleDeleteIcon + handle retreat cost

// add move name to input and get it to map
// add move damage input and get it to render
// create move description component / input/render
// create weakness/resistance/retreate component
const Main = styled.main`
  height: auto;
  max-width: 900px;
  background-color: #ee8329;
  margin: 0 auto;
`
