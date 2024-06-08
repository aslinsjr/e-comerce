import './Header.css'

import Cart from './Cart'

const Header = ({cart, handleCartOpen, openCart, handleRemove, handleCheckOut}) => {
  return (
    <div className='header'>
        <img src="./logo.png" alt="Logo Image" />
        <div className="cart-bag" onClick={() => handleCartOpen(openCart)}>
          {cart.length > 0 ? <i  className="bi bi-bag-check"></i> : <i className="bi bi-bag"></i>}
          {openCart ? <Cart cart={cart} handleRemove={handleRemove} handleCheckOut={handleCheckOut} /> : <></>}
        </div>
    </div>  
  )
}

export default Header