import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const url = "http://localhost:3000/pizzas"

import './App.css'

import Header from './components/Header'
import PizzasSalgadas from './components/PizzasSalgadas'
import PizzasDoces from './components/PizzasDoces'
import Combos from './components/Combos'
import Bebidas from './components/Bebidas'

function App() {

  const [cart, setCart] = useState(0)
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {

    async function getData() {

      const res = await fetch(url)

      const data = await res.json()

      setPizzas(data)
    }

    getData()

    
  }, [])
  
  return (
    <div>
      <Header cart={cart}/>
      <Router>
      <div className="navbar-container">
        {/* <img id='mobile-icon' src={mobileIcon} alt="Mobile Menu Icon" onClick={(e) => handleMenu(e)}/> */}
        <nav>
          <Link to="/">Pizzas Salgadas</Link>
          <Link to="/doces">Pizzas Doces</Link>
          <Link to="/combos">Combos</Link>
          <Link to="/bebidas">Bebidas</Link> 
        </nav>
      </div>
      <Routes>
        <Route path='/doces' element={<PizzasDoces pizzas={pizzas} />} />
        <Route path='/combos' element={<Combos />} />
        <Route path='/bebidas' element={<Bebidas />}/>
        <Route path='/' element={<PizzasSalgadas pizzas={pizzas} />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
