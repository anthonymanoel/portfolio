import React from 'react';
import Navbar from './Components/Navbar.js';
import MainContent from './Components/MainContent.js'
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';


function App() {
  return (
  <>
  <Navbar></Navbar>
  <MainContent></MainContent>
  <Projects></Projects>
  <Contact></Contact>
  </>
  )
}

export default App