import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, ondAdd }) => {
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
    <div>
      <button onClick={decrement}>-</button>
      <h4>{count}</h4>
      <button onClick={increment}>+</button>
      <button onClick={() => ondAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;