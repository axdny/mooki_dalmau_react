import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="container justify-content-center">
      {products.map(product => <Item key={product.id} name={product.name} price={product.price} img={product.img} />)}
    </div>
  );
};

export default ItemList;