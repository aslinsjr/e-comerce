import React from 'react'

const PizzasDoces = ({pizzas}) => {
  return (
    <>
    {pizzas.map((pizzaDoce) => {
      if(pizzaDoce.type === "Doce"){
        return (
          <div className='Doces'>
            <h2>{pizzaDoce.name}</h2>
            <img src={pizzaDoce.src} alt="" />
            <p>{pizzaDoce.small}</p>
            <p>{pizzaDoce.large}</p>
          </div>
        )
      }
  })}
    </>
  )
}

export default PizzasDoces