import { useState } from 'react'
import './App.css'
import Hero from "./components/app/Hero"
import Navbar from './components/app/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
