import './Header.css'

const Header = ({cart}) => {
  return (
    <div className='header'>
        <img src="./logo.png" alt="Logo Image" />
        {cart > 0 ? <i className="bi bi-bag-check"></i> : <i className="bi bi-bag"></i>}
    </div>  
  )
}

export default Header