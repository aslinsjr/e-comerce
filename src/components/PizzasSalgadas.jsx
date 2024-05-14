import React from 'react'

const PizzasSalgadas = ({pizzas}) => {

  


  return (
    <>
    {pizzas.map((pizzaSalgada) => {
      if(pizzaSalgada.type === "Salgada"){
        return (
          <div className='Salgadas'>
            <h2>{pizzaSalgada.name}</h2>
            <img src={pizzaSalgada.src} alt="" />
            <p>{pizzaSalgada.small}</p>
            <p>{pizzaSalgada.large}</p>
          </div>
        )
      }
  })}
    </>
    
  )
}

export default PizzasSalgadas