import { useState } from 'react';
import './ItemCount.css';

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

  return (
    <div className='d-flex justify-content-center'>
      <button onClick={decrement} className="text-black btn-count d-flex justify-content-center align-items-center">-</button>
      <h4 className="count text-white">{count}</h4>
      <button onClick={increment} className="text-black btn-count d-flex justify-content-center align-items-center">+</button>
      <button onClick={() => onAdd(count)} className="btn">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;