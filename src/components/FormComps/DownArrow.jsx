import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const DownArrow = ({ type, payload }) => {
  const { handleEnergy } = useContext(FormContext)

  return (
    <ArrowDropDownIcon
      className="down"
      onClick={() => handleEnergy(type, payload)}
    />
  )
}

export default DownArrow
