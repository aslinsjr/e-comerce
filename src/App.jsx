import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const urlProducts = "http://localhost:3000/produtos"

import './App.css'

import Header from './components/Header'
import PizzasSalgadas from './components/PizzasSalgadas'
import PizzasDoces from './components/PizzasDoces'
import Combos from './components/Combos'
import Bebidas from './components/Bebidas'
import CartForm from './components/CartForm'

function App() {

  const [cart, setCart] = useState([])
  const [data, setData] = useState([])
  const [cartForm, setCartForm] = useState(false)
  const [newItem, setNewItem] = useState()
  const [small, setSmall] = useState(0)
  const [large, setLarge] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [openCart, setOpenCart] = useState(false)
  const [checkOut, setCheckOut] =useState(false)
  const [singUp, setSingUp] = useState(false)

  useEffect(() => {

    async function getData() {

      const res = await fetch(urlProducts)

      const data = await res.json()

      setData(data)
    }

    getData()

  }, [])

  function handleClick(e) {

    setSmall(0)
    setLarge(0)
    setQuantity(0)

    window.scrollTo(0,0)

    const body = document.querySelector("body")
    body.style.overflow = 'hidden'

    setCartForm(true)

    setNewItem(data.filter((product) => product.name === e.target.id))
    
  }

  function handleQuantity(e) {

    if(e.target.className === "small") {
      if(e.target.innerHTML === "+") {
        setSmall(small + 1)
      }
      if(e.target.innerHTML === "-" && small > 0) {
        setSmall(small - 1)
      }
    }

    if(e.target.className === "large") {
      if(e.target.innerHTML === "+") {
        setLarge(large + 1)
      }
      if(e.target.innerHTML === "-" && large > 0) {
        setLarge(large - 1)
      }
    }

    if(e.target.className === "quantity") {
      if(e.target.innerHTML === "+") {
        setQuantity(quantity + 1)
      }
      if(e.target.innerHTML === "-" && quantity > 0) {
        setQuantity(quantity - 1)
      }
    }
  }

  function handleCart() {
    const body = document.querySelector("body")

    class Product{
      constructor(id, name, size, price, quantity) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.price = price;
        this.quantity = quantity
      }
    }

    if(small > 0) {
      let newProduct = new Product(newItem[0].id, newItem[0].name, "Pequena", newItem[0].small, small)

      setCart(prevCart => [...prevCart, newProduct])
    }

    if(large > 0) {
      let newProduct = new Product(newItem[0].id, newItem[0].name, "Grande", newItem[0].large, large)

      setCart(prevCart => [...prevCart, newProduct])
    }

    if(quantity > 0) {
      let newProduct = new Product(newItem[0].id, newItem[0].name, "", newItem[0].price, quantity)

      setCart(prevCart => [...prevCart, newProduct])
    }

    setOpenCart(true)

    setCartForm(false)
    body.style.overflow = 'auto'

  }

  function handleCartOpen(openCart) {
    
    if(openCart == false) {
      setOpenCart(true)
    } else {
      setOpenCart(false)
    }

  }

  function handleRemove() {
    cart.pop()
  }

  function handleCheckOut() {
  
    const body = document.querySelector("body")
    body.style.overflow = 'hidden'

    setCartForm(true)
    setCheckOut(true)
  }

  function handleSingUp() {

    setSingUp(true)

  }
  
  return (
    <div>
      {cartForm ? <div className="bg">
        <CartForm newItem={newItem} handleCart={handleCart} handleQuantity={handleQuantity} small={small} large={large} quantity={quantity} checkOut={checkOut} singUp={singUp} handleSingUp={handleSingUp}/>
      </div> : <></>}
      <Header cart={cart} handleCartOpen={handleCartOpen} openCart={openCart} handleRemove={handleRemove} handleCheckOut={handleCheckOut}/>
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
        <Route path='/doces' element={<PizzasDoces data={data} handleClick={handleClick} />}/>
        <Route path='/combos' element={<Combos data={data} handleClick={handleClick}/>} />
        <Route path='/bebidas' element={<Bebidas data={data} handleClick={handleClick}/>} />
        <Route path='/' element={<PizzasSalgadas data={data} handleClick={handleClick}/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
