

const Bebidas = ({data, handleClick}) => {

  return (
    <div className='products-container'>
    {data.map((bebida) => {
      if(bebida.type === "bebida"){
      return (
        <div className='item' key={"bebida "+bebida.id}>
          <h2>{bebida.name}</h2>
          <img src={bebida.src} alt="" />
          {bebida.price ? <div className="price-container">
          <p>500ml R$ {bebida.price}</p>
          <button id={bebida.name} onClick={(e) => handleClick(e)}>+</button>
          </div>  : <div className="price-container">
            <div>
              <p>Lata R$ {bebida.small}</p>
              <p>2 litros R$ {bebida.large}</p>
            </div>
          <button id={bebida.name} onClick={(e) => handleClick(e)}>+</button>
          </div>}
        </div>
      )
    }
  })}
    </div>
  )
}

export default Bebidas