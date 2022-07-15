import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Heating from './pages/Heating'
import AirConditioning from './pages/AirConditioning'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Heating_AC_Redesign' element={<Home />} />
        <Route path='/Heating_AC_Redesign/Heating' element={<Heating />} />
        <Route path='/Heating_AC_Redesign/Air_Conditioning' element={<AirConditioning />} />
        <Route path='/Heating_AC_Redesign/Services' element={<Services />} />
        <Route path='/Heating_AC_Redesign/Contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
