import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const UpArrow = ({ type }) => {
  const { handleEnergy } = useContext(FormContext)

  return (
    <ArrowDropUpIcon
      className="up"
      onClick={() => handleEnergy('ENERGY', type)}
    />
  )
}

export default UpArrow
