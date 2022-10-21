import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'

const ItemDetailContainer = ({setCart}) => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  
  useEffect(() => {
    const docReference = doc(db, 'products', productId)
    getDoc(docReference).then(response => {
      const data = response.data();
      const productDetail = { id: response.id, ...data };
      setProduct(productDetail);
    })
  })

  return (
    <div>
      <ItemDetail  {...product} />
    </div>
  );
};

export default ItemDetailContainer;