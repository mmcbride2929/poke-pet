import styled from 'styled-components'
import Home from '../pages/Home'
import Navbar from './NavFooterComps/Navbar'
import FormContext from '../context/FormContext'
import { useContext } from 'react'

const Pokepet = () => {
  const { Themes, theme } = useContext(FormContext)
  return (
    <>
      <Main style={{ backgroundColor: Themes[theme].bodyColor }}>
        <Navbar />
        <Home />
      </Main>
    </>
  )
}

export default Pokepet

// handleDeleteIcon + handle retreat cost delete
// HANDLE add retreat, and how to add multiple

const Main = styled.main`
  height: auto;
  margin: 0 auto;
`
