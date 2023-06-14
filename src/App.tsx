import { useState } from 'react'

import './App.css'
import { NavBar } from './components/NavBar'
import { Power } from './components/Power'
import { Cart } from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar/>
   <Power/>
   <Cart/>
    
    
    </>
  )
}

export default App
