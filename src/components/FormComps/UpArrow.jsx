import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const UpArrow = ({ type, payload }) => {
  const { handleEnergy } = useContext(FormContext)

  return (
    <ArrowDropUpIcon
      className="up"
      onClick={() => handleEnergy(type, payload)}
    />
  )
}

export default UpArrow
