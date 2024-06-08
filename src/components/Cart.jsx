import './Cart.css'

const Cart = ({cart, handleRemove, handleCheckOut}) => {
  return (
    <div className='cart-container'>
        <h3>Seu pedido</h3>
        {cart.map((product) => {
            return(
              <div className='cart-product' key={product.id}>
                  <p>{product.name}</p>
                  <p id='product-size'>{product.size}</p>
                  <p id='product-price'>R$ {`${product.price} x ${product.quantity} = R$ ${product.price*product.quantity}`}</p>
              </div>
            )
        })}
        <div className="cart-btn-controll">
          <button onClick={() => handleRemove()}>Remover</button>
          <button onClick={() => handleCheckOut()}>Finalizar</button>
        </div>
    </div>
  )
}

export default Cart