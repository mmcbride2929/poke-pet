import styled from 'styled-components'
import Home from '../pages/Home'
import Navbar from './NavFooterComps/Navbar'
import FormContext from '../context/FormContext'
import { useContext } from 'react'

const Pokepet = () => {
  const { Themes, theme } = useContext(FormContext)
  return (
    <>
      <Navbar />
      <Main style={{ backgroundColor: Themes[theme].bodyColor }}>
        <Home />
      </Main>
    </>
  )
}

export default Pokepet

// handleDeleteIcon + handle retreat cost delete
// HANDLE add retreat, and how to add multiple

// does width need to go under 375?
// need to add a section for retreat icons
// add key to mappings of icons.. MOVE COST . RETREAT COST

const Main = styled.main`
  height: auto;
  max-width: 900px;
  margin: 0 auto;
`
