import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid place-items-center items-center  mx-[0.7em]'>
      <div className='max-w-[100rem]'>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
