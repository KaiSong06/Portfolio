import { useState } from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
