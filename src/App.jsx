import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from '../../components/Header'
import Nav from '../../components/NavBar.jsx'
import Articles from '../../components/Articles.jsx'

const App = () => {
return (
  <section className="App">
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<h2 className="HomePage"> Home </h2>}/>
      <Route path="/articles" element={<Articles/>}/>
    </Routes>
  </section>
)
}



export default App
