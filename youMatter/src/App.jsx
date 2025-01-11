import './App.module.css'
import { Footer } from './component/Footer/Footer'
import { Home } from './component/Home/Home'
import { Navbar } from './component/Navbar/Navbar'
import { OurMission } from './component/OurMission/OurMission'
import { ExpressAndConnect } from './component/ExpressAndConnect/ExpressAndConnect'
import { LoginSignup } from './component/LoginSignup/LoginSignup'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <OurMission/>
    <ExpressAndConnect/>
    <LoginSignup/>
    <Footer />
    </>
  )
}

export default App
