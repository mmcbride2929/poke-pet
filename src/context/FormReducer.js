const formReducer = (state, action) => {
  // allowing input to only accept letters + - ' '
  const letters = /^[a-zA-Z.\-, ' ']+$/

  switch (action.type) {
    case 'SET_NAME':
      // when input is empty, clear name
      if (action.payload === '') {
        return { ...state, name: '' }
      }
      // filter out non-letters
      if (action.payload.match(letters)) {
        return {
          ...state,
          name: action.payload,
        }
      } else {
        return state
      }

    case 'SET_TYPE':
      return {
        ...state,
        type: action.payload,
      }

    case 'SET_HP':
      if (action.payload.length < 4) {
        return {
          ...state,
          hitpoints: action.payload,
        }
      } else {
        return state
      }

    case 'SET_IMG':
      return {
        ...state,
        img: action.payload,
      }

    case 'SET_LENGTH_FEET':
      if (action.payload.length < 2) {
        return {
          ...state,
          lengthFeet: action.payload,
        }
      } else {
        return state
      }

    case 'SET_LENGTH_INCH':
      if (action.payload.length < 3) {
        return {
          ...state,
          lengthInches: action.payload,
        }
      } else {
        return state
      }

    case 'SET_WEIGHT':
      if (action.payload.length < 4) {
        return {
          ...state,
          weight: action.payload,
        }
      } else {
        return state
      }

    case 'SET_ENERGY':
      if (state.energyIcons.length < 4) {
        return {
          ...state,
          energyIcons: [...state.energyIcons, action.payload],
        }
      } else {
        return state
      }

    case 'SET_ENERGY_DELETE':
      if (state.energyIcons.length > 0) {
        // clone energyIcons array
        const iconsClone = JSON.parse(JSON.stringify(state.energyIcons))
        const reverseIcons = iconsClone.reverse()
        // getting index of latest type entered in reversed arr
        const index = reverseIcons.indexOf(action.payload, 0)
        if (index > -1) {
          reverseIcons.splice(index, 1)
          return {
            ...state,
            // re-reversing to set render in correct order
            energyIcons: reverseIcons.reverse(),
          }
        } else {
          return state
        }
      }

    case 'SET_MOVE_NAME':
      // when input is empty, clear name
      if (action.payload === '') {
        return { ...state, moveName: '' }
      }
      if (action.payload.match(letters)) {
        return {
          ...state,
          moveName: action.payload,
        }
      } else {
        return state
      }

    case 'SET_MOVE_DAMAGE':
      if (action.payload.length < 4) {
        return {
          ...state,
          moveDamage: action.payload,
        }
      } else {
        return state
      }

    case 'SET_MOVE_DESC':
      // when input is empty, clear name
      if (action.payload === '') {
        return { ...state, moveDesc: '' }
      }
      if (action.payload.match(letters)) {
        return {
          ...state,
          moveDesc: action.payload,
        }
      } else {
        return state
      }

    case 'SET_WEAKNESS':
      return {
        ...state,
        weaknessIcon: action.payload,
      }

    case 'SET_RESISTANCE':
      return {
        ...state,
        resistanceIcon: action.payload,
      }

    case 'SET_RETREAT_ADD':
      if (state.retreatCost.length < 3) {
        return {
          ...state,
          retreatCost: [...state.retreatCost, action.payload],
        }
      } else {
        return state
      }

    case 'SET_RETREAT_DELETE':
      if (state.retreatCost.length > 0) {
        // clone energyIcons array
        const iconsClone = JSON.parse(JSON.stringify(state.retreatCost))
        const reverseIcons = iconsClone.reverse()
        // getting index of latest type entered in reversed arr
        const index = reverseIcons.indexOf(action.payload, 0)
        if (index > -1) {
          reverseIcons.splice(index, 1)

          return {
            ...state,
            // re-reversing to set render in correct order
            retreatCost: reverseIcons.reverse(),
          }
        } else {
          return state
        }
      }
    case 'SET_DESCRIPTION':
      // when input is empty, clear name
      if (action.payload === '') {
        return { ...state, description: '' }
      }
      if (action.payload.match(letters)) {
        return {
          ...state,
          description: action.payload,
        }
      } else {
        return state
      }

    case 'SET_LEVEL':
      if (action.payload.length < 4) {
        return {
          ...state,
          level: action.payload,
        }
      } else {
        return state
      }

    default:
      return state
  }
}

export default formReducer
