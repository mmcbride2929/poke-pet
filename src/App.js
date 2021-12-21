import { FormProvider } from './context/FormContext'
import { CardProvider } from './context/CardContext'
import Pokepet from './components/Pokepet'

function App() {
  return (
    <FormProvider>
      <CardProvider>
        <Pokepet />
      </CardProvider>
    </FormProvider>
  )
}

export default App
