import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Banner from './Components/Banner'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import About from './Components/About'
import Courses from './Components/Courses'
import Notes from "./Components/Notes";
import Ebook from "./Components/Ebooks";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome</h1>
      <button className='bg-red-600'>hire me</button>
      <Header />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="courses">
        <Courses />
      </section>

      <section id="ebooks">
        <Ebook />
      </section>

      <section id="notes">
        <Notes />
      </section>
      

      <section id="contacts">
        <Contacts />
      </section>
      <section id='6'>
        <Footer />
      </section>

    </>
  )
}

export default App
