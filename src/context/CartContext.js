import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  console.log(cart);

  useEffect(() => {
    const totalQty = getQuantity();
    setTotalQuantity(totalQty);
  },[cart]);

  const addItem = (productToAdd) => {
    console.log('additem');
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      console.log('ya esta en el carrito');
    }
  };

  const getQuantity = () => {
    let acumulador = 0;
    cart.forEach(prod => {
      acumulador += prod.quantity;
    });
    return acumulador;
  };

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter(prod => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};