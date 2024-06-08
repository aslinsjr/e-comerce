
const Combos = ({data, handleClick}) => {

  return (
    <div className='products-container'>
    {data.map((combo) => {
      if(combo.type === "combo"){
      return (
        <div className='item' key={"combo "+combo.id}>
          <h2>{combo.name}</h2>
          <img src='./logo-combos.png' alt="" />
          <div className="price-container">
            <div>
              <p id="combo-description">{combo.description}</p>
              <p>R$ {combo.price}</p>
            </div>
            <button id={combo.name} onClick={(e) => handleClick(e)}>+</button>
          </div>
        </div>
      )
    }
  })}
    </div>
  )
}

export default Combos