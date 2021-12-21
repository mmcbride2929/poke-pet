import { createContext, createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'

const CardContext = createContext()

export const CardProvider = ({ children }) => {
  // take screenshot state
  const ref = createRef(null)
  const getImage = () => takeScreenshot(ref.current)

  // download state

  const [image, takeScreenshot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  })

  const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const downloadScreenshot = () => takeScreenshot(ref.current).then(download)

  return (
    <CardContext.Provider value={{ ref, getImage, downloadScreenshot }}>
      {children}
    </CardContext.Provider>
  )
}
export default CardContext
