import { useState } from 'react'
import './App.css'
import Shop from './assets/features/shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Shop />
 
    </>
  )
}

export default App
