import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/index';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async () => {
    setLoading(true);
    try {
      const order = {
        buyer: {
          name: name,
          phone: phone,
          mail: mail
        },
        items: cart,
        total: total
      };

      const batch = writeBatch(db);
      const noStock = [];
      const ids = cart.map(prod => prod.id);
      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
      const { docs } = productsAddedFromFirestore;

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productsAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          noStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (noStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = addDoc(orderRef, order);

        clearCart();
        alert(`El id de su orden es: ${orderAdded.id}`);
      } else {
        alert('Hay prodcutos fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }
  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            Finalizar Compra
          </h1>
          <form>
            <label for="name">Nombre:</label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            <label for="phone">Telefono:</label>
            <input type="number" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            <label for="mail">Mail:</label>
            <input type="text" name="mail" value={mail} onChange={e => setMail(e.target.value)} />
          </form>
          <div className="d-flex justify-content-evenly mt-5 text-white fw-bold fs-1">
            <button className="btn" onClick={createOrder}>generar orden</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
