import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
      setCount(count + 1);
  }

  const decrement = () => {
      setCount(count - 1);
  }

  return (
    <div>
      <h3>Torta Harry Potter</h3>
      <h4>{count}</h4>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;