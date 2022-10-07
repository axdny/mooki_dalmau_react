import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
      setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;