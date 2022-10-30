import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
          name,
          phone,
          mail
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
        const orderAdded = await addDoc(orderRef, order);

        clearCart();
        const confirmAlert = withReactContent(Swal);
        confirmAlert.fire({
          icon: 'success',
          title: `Su numero de orden es: ${orderAdded.id}. ¡Gracias por la compra!`,
          showConfirmButton: true,
        });
      } else {
        const errorAlert = withReactContent(Swal);
        errorAlert.fire({
          icon: 'Error',
          title: 'No hay stock disponible. Por favor comunicarse via mail.',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <main className="hero-image principal-color">
        <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
          <div className="hero-image--content">
            <h1 className="hero-image--title text-white fw-bold pb-1">
              Procesando su compra...
            </h1>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            Finalizar Compra
          </h1>
          <form className="contact-form p-2">
            <input className="border-0" type="text" name="name" placeholder="apellido y nombre" value={name} onChange={e => setName(e.target.value)} />
            <input className="border-0" type="tel" name="phone" placeholder="telefono de contacto" value={phone} onChange={e => setPhone(e.target.value)} />
            <input className="border-0" type="mail" name="mail" placeholder="e-mail" value={mail} onChange={e => setMail(e.target.value)} />
          </form>
          <div className="d-flex justify-content-evenly mt-5 text-white fw-bold fs-1">
            <button className="btn p-4 fs-5 fw-bolder" onClick={createOrder}>Generar orden</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
