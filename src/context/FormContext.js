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

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}
export default FormContext
