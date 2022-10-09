import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products, setPage }) => {
  return (
    <div className="container justify-content-center">
      {products.map(product => <Item key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} setPage={setPage} />)}
    </div>
  );
};

export default ItemList;