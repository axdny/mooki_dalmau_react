import { useState, useEffect } from 'react';
import { getProductById } from '../../asynMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({setCart}) => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then(response => {
      setProduct(response);
    })
  }, [productId]);

  return (
    <div>
      <ItemDetail  {...product} />
    </div>
  );
};

export default ItemDetailContainer;