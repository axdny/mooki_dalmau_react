import cart from '../Assets/cart.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <div to='/cart' className="d-flex cart fw-bold text-white fs-2">
      <div>{totalQuantity}</div>
      <button>
        <img src={cart} alt="carrito" className="cart-image" />
      </button>
    </div>
  );
};

export default CartWidget;