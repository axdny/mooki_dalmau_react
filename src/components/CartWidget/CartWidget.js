import cart from '../Assets/cart.svg';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="d-flex cart fw-bold text-white fs-2">
      <div>-</div>
      <button>
        <img src={cart} alt="carrito" className="cart-image" />
      </button>
    </div>
    )
}

export default CartWidget;