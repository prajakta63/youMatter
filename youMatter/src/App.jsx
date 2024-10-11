import './App.module.css'
import { Footer } from './component/Footer/Footer'
import { Home } from './component/Home/Home'
import { Navbar } from './component/Navbar/Navbar'
import { OurMission } from './component/OurMission/OurMission'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <OurMission/>
    <Footer />
    </>
  )
}

export default App
