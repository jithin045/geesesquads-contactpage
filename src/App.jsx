import { useState } from 'react'
import ContactPage from './components/pages/contact/ContactPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactPage />
    </>
  )
}

export default App
