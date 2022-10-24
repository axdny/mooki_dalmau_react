import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0)

  console.log(cart);

  useEffect(() => {
    const totalQty = getQuantity();
    setTotalQuantity(totalQty);
  }, [cart]); //eslint-disable-line

  useEffect(() => {
    const total = getTotal();
    setTotal(total);
  }, [cart]); //eslint-disable-line

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

  const getTotal = () => {
    let acumulador = 0;
    cart.forEach(prod => {
      acumulador += prod.quantity * prod.price;
    });
    return acumulador;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id);
    return product?.quantity;
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, total, clearCart, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};