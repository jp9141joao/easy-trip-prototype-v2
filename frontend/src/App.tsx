import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'

function App() {

  return (
    <div className='grid place-items-center items-center mx-[0.7em]'>
      <div className='max-w-[100rem]'>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  )
}

export default App
