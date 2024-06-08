import React from 'react'

const PizzasDoces = ({data, handleClick}) => {
  return (
    <div className='products-container'>
    {data.map((pizzaDoce) => {
      if(pizzaDoce.type === "pizza-doce"){
        return (
          <div className='item' key={"doce "+pizzaDoce.id}>
            <h2>{pizzaDoce.name}</h2>
            <img src={pizzaDoce.src} alt="" />
            <div className="price-container">
              <div>
                <p>Pequena R$ {pizzaDoce.small}</p>
                <p>Grande R$ {pizzaDoce.large}</p>
              </div>
              <button id={pizzaDoce.name} onClick={(e) => handleClick(e)}>+</button>
            </div>
          </div>
        )
      }
  })}
    </div>
  )
}

export default PizzasDoces