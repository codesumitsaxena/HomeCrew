import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './Components/NavbarApp'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';


function App() {

  return (
    <>
     <NavbarApp/>
     <HeroSection/>
     <Services/>
    </>
  )
}

export default App
