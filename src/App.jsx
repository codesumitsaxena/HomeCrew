import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './Components/NavbarApp'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import MostBooked from './Components/MostBooked';


function App() {

  return (
    <>
     <NavbarApp/>
     <HeroSection/>
     <Services/>
     <MostBooked/>
    </>
  )
}

export default App
