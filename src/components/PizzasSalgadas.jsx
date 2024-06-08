import React from 'react'

const PizzasSalgadas = ({data, handleClick}) => {

  return (
    <div className='products-container'>
    {data.map((pizzaSalgada) => {
      if(pizzaSalgada.type === "pizza-salgada"){
        return (
          <div className='item' key={"salgada "+pizzaSalgada.id}>
            <h2>{pizzaSalgada.name}</h2>
            <img src={pizzaSalgada.src} alt="" />
            <div className="price-container">
              <div>
                <p>Pequena R$ {pizzaSalgada.small}</p>
                <p>Grande R$ {pizzaSalgada.large}</p>
              </div>
              <button id={pizzaSalgada.name} onClick={(e) => handleClick(e)}>+</button>
            </div>
          </div>
        )
      }
  })}
    </div>
  )
}

export default PizzasSalgadas