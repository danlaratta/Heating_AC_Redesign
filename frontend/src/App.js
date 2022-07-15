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
        <Route path='/Heating' element={<Heating />} />
        <Route path='/Air_Conditioning' element={<AirConditioning />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
