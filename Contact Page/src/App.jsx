import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="main_container">
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </div>
    </>
  )
}

export default App
