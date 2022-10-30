import { useState } from 'react';
import './ItemCount.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addAlert = () => {
    const swal = withReactContent(Swal);
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado con exito',
      showConfirmButton: false,
      timer: 1300
    });
  };


  return (
    <div className='d-flex justify-content-center'>
      <button onClick={decrement} className="text-black btn-count d-flex justify-content-center align-items-center">-</button>
      <h4 className="count text-white">{count}</h4>
      <button onClick={increment} className="text-black btn-count d-flex justify-content-center align-items-center">+</button>
      <button onClick={() => { onAdd(count); addAlert()}} className="btn">Agregar al carrito</button>
    </div >
  );
};

export default ItemCount;