import { useState, useEffect } from 'react';
import { getProductById } from '../../asynMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById('3').then(response => {
      setProduct(response);
    })
  }, []);

  return (
    <div>
      <ItemDetail  {...product} />
    </div>
  );
};

export default ItemDetailContainer;