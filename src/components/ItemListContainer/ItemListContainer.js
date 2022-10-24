import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionReference = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionReference).then(response => {
      const productsList = response.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProducts(productsList);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <main className="hero-image principal-color">
      <div className="hero-image--opacity d-flex justify-content-center align-items-center text-center w-100">
        <div className="hero-image--content">
          <h1 className="hero-image--title text-white fw-bold pb-1">
            {greeting}
          </h1>
          <h3 className="text-white fs-1">Pastelería y panadería a base de plantas</h3>
          {loading ? <LoadingSpinner /> : <ItemList products={products} />}
        </div>
      </div>
    </main>
  );
};

export default ItemListContainer;