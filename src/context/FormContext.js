import { createContext, useReducer } from 'react'
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
    console.log('SET_' + string)
    console.log(e.target.value)
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
    console.log('SET_' + string)
    console.log(energyType)
    dispatch({
      type: 'SET_' + string,
      payload: energyType,
    })
  }

  return (
    <FormContext.Provider
      value={{ ...state, dispatch, handleDispatch, imageHandler, handleEnergy }}
    >
      {children}
    </FormContext.Provider>
  )
}
export default FormContext
