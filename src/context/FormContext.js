import { createContext, useReducer, useState } from 'react'
import formReducer from './FormReducer'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const initialState = {
    name: '',
    type: 'fire',
    hitpoints: '30',
    img: '',
    lengthFeet: '',
    lengthInches: '',
    weight: '',
    moveName: '',
    energyIcons: [],
    moveDamage: '',
    moveDesc: '',
    weaknessIcon: '',
    resistanceIcon: '',
    retreatCost: ['fire', 'water', 'fighting'],
    description: '',
    level: '',
  }

  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleDispatch = (string, e) => {
    dispatch({
      type: 'SET_' + string,
      payload: e.target.value,
    })
  }

  const imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch({ type: 'SET_IMG', payload: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleEnergy = (string, energyType) => {
    dispatch({
      type: 'SET_' + string,
      payload: energyType,
    })
  }

  const [theme, setTheme] = useState(2)

  const Themes = [
    {
      name: 'Bulba',
      bodyColor: '#2a513f',
      fontColor: '#cef795',
      bgColor: '#83ba36',
    },
    {
      name: 'Squirtle',
      bodyColor: '#8bc5cd',
      fontColor: '#2062ac',
      bgColor: '#b4e6ee',
    },
    {
      name: 'Charm',
      bodyColor: '#ee8329',
      fontColor: '#d53127',
      bgColor: '#fccf12',
    },
  ]

  return (
    <FormContext.Provider
      value={{
        ...state,
        dispatch,
        handleDispatch,
        imageHandler,
        handleEnergy,
        theme,
        setTheme,
        Themes,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
export default FormContext
