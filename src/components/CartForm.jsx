import './CartForm.css'

const CartForm = ({newItem, handleCart, handleQuantity,small, large, quantity, checkOut, handleSingUp, singUp}) => {

  

  return (<>
    {checkOut ? 
    <div className="cart-form">
      <h3>Faça o Login</h3>
      <button id='sing-up-btn' onClick={() => handleSingUp()}>Ou crie sua conta</button>
      {singUp == false ? 
      <div className='inner-form'>
        <label htmlFor="email">
          <input type="text" name='email' placeholder='Digite seu e-mail' />
        </label>
        <label htmlFor="password">
          <input type="password" name='password' placeholder='Digite sua senha' />
        </label>
      </div> : 
      <>
        <div className='inner-form'> 
          <label htmlFor="name">
            <input type="text" name='name' placeholder='Informe seu nome completo' />
         </label>
         <label htmlFor="email">
            <input type="text" name='email' placeholder='Informe um email' />
         </label>
         <label htmlFor="adress">
            <input type="text" name='adress' placeholder='Informe o endereço para entregas' />
         </label>
         <label htmlFor="phone">
            <input type="text" name='phone' placeholder='Informe o número de telefone' />
         </label>
         <label htmlFor="password">
            <input type="password" name='password' placeholder='Crie uma senha de acesso' />
          </label>
          <input type="submit" />
        </div>
      </>}
        </div> : <div className='cart-form'>
          <h3>{newItem[0].name}</h3>
          {newItem[0].src ? <img src={newItem[0].src} alt="Item Image" /> : <img src='./logo-combos.png' alt="Item Image" />}
          {newItem[0].small || newItem[0].lata ? <>
          <div className="price-controll">
          {newItem[0].type === "bebida" ? <>
            <p>Lata:</p>
            <p>R$ {newItem[0].small}</p>
          </> : <>
            <p>Pequena:</p>
            <p>R$ {newItem[0].small}</p>
          </>}
        <div className="price-counter">
          <button className='small' onClick={(e) => handleQuantity(e)}>-</button><span>{small}</span><button className='small' onClick={(e) => handleQuantity(e)}>+</button>
        </div>
      </div>
      <div className="price-controll">
      {newItem[0].type === "bebida" ? <>
        <p>2 Litros:</p>
        <p>R$ {newItem[0].large}</p>
      </> : <>
        <p>Grande:</p>
        <p>R$ {newItem[0].large}</p>
      </>}
      <div className="price-counter">
        <button className='large' onClick={(e) => handleQuantity(e)}>-</button><span>{large}</span><button className='large' onClick={(e) => handleQuantity(e)}>+</button>
      </div>
    </div>
    </> :
    <div className="price-controll">
      <p>R${newItem[0].price}</p>
      <div className="price-counter">
        <button className='quantity' onClick={(e) => handleQuantity(e)}>-</button><span>{quantity}</span><button className='quantity' onClick={(e) => handleQuantity(e)}>+</button>
      </div>
    </div>
    }
    <button id='add-cart' onClick={() => handleCart()}>Adicionar ao carrinho</button>
  </div>}
  </>  
  )
}

export default CartForm