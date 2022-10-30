import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, total } = useContext(CartContext);
  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            Resumen de compra
          </h1>
          {
            cart.length === 0
              ? <h1 className="text-white">Sin productos en el carrito</h1>
              : cart.map(prod => (
                <div className="d-flex justify-content-evenly pt-5 text-white fw-bold fs-3">
                  {prod.name} x {prod.quantity} unidades / Precio unitario: $ {prod.price}.-
                  <div className="btn btn-group d-flex">
                    <button onClick={() => removeItem(prod.id)}>x</button>
                  </div>
                </div>
              ))
          }
          <hr className="w-100 border border-3 rounded"></hr>
          <div className="d-flex justify-content-evenly mt-5 text-white fw-bold fs-1">
            Precio total: $ {total}.-
          </div>
          <div>
            <Link to="/checkout" className="btn p-4 fs-5 fw-bolder m-4">Realizar compra</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;